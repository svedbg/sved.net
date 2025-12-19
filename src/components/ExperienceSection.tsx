import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Engineering Manager & General Manager",
      company: "EDITED",
      companyUrl: "https://www.edited.com/",
      location: "Sofia, Bulgaria",
      period: "Present",
      description:
        "Leading the Sofia engineering office, managing cross-functional teams, and driving strategic initiatives for the retail intelligence platform.",
      highlights: [
        "Managing and scaling the Sofia engineering hub",
        "Building high-performing distributed teams",
        "Driving technical excellence and innovation",
        "Collaborating with London and New York offices",
      ],
    },
    {
      role: "Senior Engineering Roles",
      company: "Previous Experience",
      companyUrl: null as string | null,
      location: "Bulgaria",
      period: "Earlier",
      description:
        "Progressive engineering leadership roles focused on building scalable systems and growing technical teams.",
      highlights: [
        "Software architecture and system design",
        "Team mentorship and development",
        "Agile methodologies implementation",
        "Cross-functional collaboration",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-neutral-subtle/20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-brand font-mono text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Career <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-content-muted text-lg max-w-2xl mx-auto">
              A track record of building teams and delivering impactful solutions
              in the technology industry.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-brand/30 transition-all duration-300 relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute -bottom-8 left-12 w-px h-8 bg-gradient-to-b from-brand/50 to-transparent" />
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8 text-brand" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-content">
                          {exp.role}
                        </h3>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand font-medium hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-brand font-medium">{exp.company}</p>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-content-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-content-muted mb-4">{exp.description}</p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-center gap-2 text-sm text-content/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
