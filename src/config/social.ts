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
    label: "Book time with me",
    href: "https://calendly.com/svedbg/30min",
    description: "Find a time to talk",
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
