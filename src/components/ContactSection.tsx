import { Send, Loader2, Calendar } from "lucide-react";
import { useState, FormEvent } from "react";
import { socialLinks } from "../config/social";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const bookingLink = socialLinks.find((link) => link.href.includes("calendly.com"));
  const contactMethods = socialLinks.filter((link) => link !== bookingLink);

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-24 relative bg-neutral-subtle/20">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-brand font-mono text-sm tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-content-muted text-lg max-w-2xl mx-auto">
              Building a distributed engineering team? Navigating a technical
              leadership transition? I'm always happy to talk shop.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Ways to reach me */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-brand/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                    <method.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-content">{method.label}</h3>
                    <p className="text-sm text-content-muted">{method.description || method.label}</p>
                  </div>
                </a>
              ))}

              {/* Booking card */}
              {bookingLink && (
                <div className="glass-card p-6 rounded-2xl text-center">
                  <h3 className="font-semibold text-content mb-1">Rather just talk?</h3>
                  <p className="text-sm text-content-muted mb-4">Pick a time on my calendar and we'll take it from there.</p>
                  <a
                    href={bookingLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-brand text-content-inverse font-semibold rounded-xl hover:opacity-90 transition-all duration-300 glow-effect"
                  >
                    <Calendar className="w-5 h-5" />
                    Find a Time
                  </a>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 glass-card p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Send me a Message</h3>

              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-content mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-content mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-content mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-content mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                {/* Honeypot field - hidden from users, bots will fill it */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-content-inverse font-semibold rounded-xl hover:opacity-90 transition-all duration-300 glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
