import { Linkedin, Github, Calendar, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/svetoslavrankov/",
    description: "Connect with me",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/svedbg",
    description: "Personal projects",
  },
  {
    icon: Calendar,
    label: "Book a Meeting",
    href: "https://calendly.com/svedbg/30min",
    description: "Schedule 30 min",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const location = {
  city: "Sofia, Bulgaria",
};
