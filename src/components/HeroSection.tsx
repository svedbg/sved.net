import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { socialLinks, location } from "../config/social";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 -left-48 animate-pulse-glow" />
      <div className="hero-glow bottom-1/4 -right-48 animate-pulse-glow delay-500" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo */}
          <div
            className="flex justify-center mb-8 animate-fade-in"
            style={{ animationFillMode: "both" }}
          >
            <Avatar className="h-28 w-28 md:h-32 md:w-32 glass-card">
              <AvatarImage
                src="https://1.gravatar.com/avatar/5aabcd7a2b0112f7bb273063d97224da9ff1aa69b960ac741d90f70aaa8964c1?size=256&d=initials"
                alt="Svetoslav Rankov profile photo"
              />
              <AvatarFallback className="text-lg font-semibold text-content">
                SR
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <a href="https://calendly.com/svedbg/30min" target="_blank" title="Book a meeting with me"><span className="text-sm text-content-muted font-medium">Get in touch for consulting & GM opportunities</span></a>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Hi, I'm{" "}
            <span className="gradient-text">Svetoslav Rankov</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-content-muted mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Engineering Manager & General Manager
          </p>

          {/* Company */}
          <p className="text-lg text-content/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Leading the Sofia Engineering Office at{" "}
            <a href="https://www.edited.com/" target="_blank" title="EDITED - Empowering Intelligent Retail"><span className="text-brand font-semibold">EDITED</span></a>
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-content-muted mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <MapPin className="w-4 h-4 text-brand" />
            <span>{location.city}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:bg-brand/10 hover:border-brand/30 transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-content-muted group-hover:text-brand transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-content-inverse font-semibold rounded-xl hover:opacity-90 transition-all duration-300 glow-effect"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-content-muted/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-brand animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
