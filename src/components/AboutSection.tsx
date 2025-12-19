import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Building and scaling high-performing engineering teams",
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Aligning technology initiatives with business objectives",
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
              Passionate About Building{" "}
              <span className="gradient-text">Great Teams</span>
            </h2>
            <p className="text-content-muted text-lg max-w-2xl mx-auto">
              With extensive experience in engineering leadership, I focus on creating 
              environments where talented people can do their best work.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-content/90 text-lg leading-relaxed">
                As the Engineering Manager and General Manager of EDITED's Sofia office, 
                I lead a talented team focused on building cutting-edge retail intelligence 
                solutions that empower some of the world's leading brands.
              </p>
              <p className="text-content-muted leading-relaxed">
                EDITED is a retail intelligence platform that helps brands and retailers 
                make data-driven decisions about pricing, assortment, and market positioning. 
                Our Sofia office is a key engineering hub, contributing to the platform's 
                innovation and growth.
              </p>
              <p className="text-content-muted leading-relaxed">
                I'm passionate about fostering a collaborative culture, implementing 
                best engineering practices, and ensuring our team delivers exceptional 
                value while growing professionally.
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
