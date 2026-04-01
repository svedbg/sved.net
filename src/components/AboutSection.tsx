import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "Organizational Leadership",
      description: "Grew the Sofia office to 30+ engineers across 4 teams",
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Set multi-year technical roadmaps aligned with business growth targets",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Driving technical excellence and continuous improvement",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Fostering a culture of learning and development",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-brand font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From First Hire to{" "}
              <span className="gradient-text">Engineering Director</span>
            </h2>
            <p className="text-content-muted text-lg max-w-2xl mx-auto">
              I helped build EDITED's Sofia office from the ground up. Today I lead the
              engineering teams that power retail intelligence for global brands.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-content/90 text-lg leading-relaxed">
                I joined EDITED early in the life of the Sofia office and helped grow it
                into a core engineering hub. My teams build the systems that help
                the world's biggest retailers decide what to stock, how to price it,
                and when to move.
              </p>
              <p className="text-content-muted leading-relaxed">
                As Senior Director, I work across our London, New York, and Sofia offices
                to set technical direction and make sure we're building the right things
                the right way. That means owning the engineering roadmap, but also making
                the hard calls on where to invest, what to retire, and when to change course.
              </p>
              <p className="text-content-muted leading-relaxed">
                The part I care most about: people. I've spent years turning strong
                engineers into strong leaders, and I believe the best engineering
                cultures are built by teams that challenge each other and have the
                trust to take real risks.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:border-brand/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                    <item.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-semibold text-content mb-2">{item.title}</h3>
                  <p className="text-sm text-content-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
