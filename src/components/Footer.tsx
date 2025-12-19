import { socialLinks } from "../config/social";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and copyright */}
            <div className="text-center md:text-left">
              <span className="text-xl font-bold gradient-text">Svetoslav Rankov</span>
              <p className="text-sm text-content-muted mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-neutral-subtle transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-content-muted group-hover:text-brand transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
