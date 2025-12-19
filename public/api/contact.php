<?php
/**
 * Secure Contact Form Handler
 * Receives form data via POST and sends email using PHPMailer
 */

// Load PHPMailer
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Set headers for JSON response
header('Content-Type: application/json');

// CORS - Restrict to your domain in production
$allowed_origins = [
    'https://sved.net',
    'https://www.sved.net',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ============================================
// CONFIGURATION
// ============================================
$recipient_email = 'sved@sved.net';
$from_email = 'noreply@sved.net';
$email_subject_prefix = '[Website Contact] ';

// SMTP Configuration - UPDATE THESE WITH YOUR CREDENTIALS
$smtp_config = [
    'host'     => 'smtp.yandex.com',      // e.g., smtp.gmail.com, smtp.sendgrid.net
    'port'     => 587,                      // 587 for TLS, 465 for SSL
    'username' => '',    // Your SMTP username
    'password' => '',    // Your SMTP password or app password
    'encryption' => 'tls',                 // 'tls' or 'ssl'
];

// Rate limiting settings
$rate_limit_file = sys_get_temp_dir() . '/contact_form_rate_limit.json';
$rate_limit_max = 5;        // Max submissions
$rate_limit_window = 3600;  // Per hour (in seconds)

// ============================================
// RATE LIMITING - Prevent spam/abuse
// ============================================
function getRateLimitData($file) {
    if (!file_exists($file)) {
        return [];
    }
    $data = json_decode(file_get_contents($file), true);
    return is_array($data) ? $data : [];
}

function saveRateLimitData($file, $data) {
    file_put_contents($file, json_encode($data), LOCK_EX);
}

$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$client_ip = explode(',', $client_ip)[0]; // Get first IP if multiple
$client_ip = filter_var(trim($client_ip), FILTER_VALIDATE_IP) ?: 'unknown';

$rate_data = getRateLimitData($rate_limit_file);
$current_time = time();

// Clean old entries
foreach ($rate_data as $ip => $timestamps) {
    $rate_data[$ip] = array_filter($timestamps, function($ts) use ($current_time, $rate_limit_window) {
        return ($current_time - $ts) < $rate_limit_window;
    });
    if (empty($rate_data[$ip])) {
        unset($rate_data[$ip]);
    }
}

// Check rate limit for this IP
$ip_submissions = $rate_data[$client_ip] ?? [];
if (count($ip_submissions) >= $rate_limit_max) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    saveRateLimitData($rate_limit_file, $rate_data);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request format']);
    exit();
}

// ============================================
// HONEYPOT CHECK - Catch bots
// ============================================
if (!empty($data['website'])) {
    // Honeypot field filled - likely a bot, silently reject
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully!'
    ]);
    exit();
}

// ============================================
// INPUT VALIDATION
// ============================================
$required_fields = ['name', 'email', 'subject', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($data[$field]) || !is_string($data[$field])) {
        $errors[] = ucfirst($field) . ' is required';
    }
}

// Validate and sanitize email
$sender_email = '';
if (!empty($data['email'])) {
    $sender_email = filter_var(trim($data['email']), FILTER_VALIDATE_EMAIL);
    if (!$sender_email) {
        $errors[] = 'Invalid email format';
    }
}

// Check for reasonable field lengths
$max_lengths = [
    'name' => 100,
    'email' => 254,
    'subject' => 200,
    'message' => 5000
];

foreach ($max_lengths as $field => $max) {
    if (!empty($data[$field]) && strlen($data[$field]) > $max) {
        $errors[] = ucfirst($field) . ' is too long';
    }
}

// Return errors if any
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => implode(', ', $errors)]);
    exit();
}

// ============================================
// SANITIZE INPUT
// ============================================
function sanitizeInput($input) {
    // Remove any null bytes
    $input = str_replace(chr(0), '', $input);
    // Remove any potential header injection characters
    $input = preg_replace('/[\r\n]/', ' ', $input);
    // Strip tags and encode special characters
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

$name = sanitizeInput($data['name']);
$subject = sanitizeInput($data['subject']);
$message = strip_tags(trim($data['message'])); // Keep newlines in message

// Additional check for header injection in name (used in body only now)
if (preg_match('/[\r\n]/', $data['name']) || preg_match('/[\r\n]/', $data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid characters detected']);
    exit();
}

// ============================================
// PREPARE EMAIL (Secure headers)
// ============================================
$full_subject = $email_subject_prefix . $subject;

// Use a fixed From address to prevent header injection
// Put sender info in the body instead
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "----------------------------------------\n";
$email_body .= "From: $name\n";
$email_body .= "Email: $sender_email\n";
$email_body .= "Subject: $subject\n";
$email_body .= "IP Address: $client_ip\n";
$email_body .= "Time: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "----------------------------------------\n\n";
$email_body .= "Message:\n\n$message\n";

// Secure headers - use fixed From address, put Reply-To for convenience
$headers = "From: Website Contact <$from_email>\r\n";
$headers .= "Reply-To: $sender_email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Priority: 3\r\n";

// ============================================
// SEND EMAIL USING PHPMAILER
// ============================================
$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host       = $smtp_config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_config['username'];
    $mail->Password   = $smtp_config['password'];
    $mail->SMTPSecure = $smtp_config['encryption'] === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtp_config['port'];

    // Recipients
    $mail->setFrom($from_email, 'Website Contact');
    $mail->addAddress($recipient_email);
    $mail->addReplyTo($sender_email, $name);

    // Content
    $mail->isHTML(false);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $full_subject;
    $mail->Body    = $email_body;

    $mail->send();
    
    // Record this submission for rate limiting
    $rate_data[$client_ip][] = $current_time;
    saveRateLimitData($rate_limit_file, $rate_data);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully!'
    ]);
} catch (Exception $e) {
    // Log error for debugging (in production, log to file instead)
    error_log("Contact form email failed for IP: $client_ip - Error: " . $mail->ErrorInfo);
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please try again later or contact directly via email.'
    ]);
}
