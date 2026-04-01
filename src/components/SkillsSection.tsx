const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Engineering Leadership",
      skills: [
        "Org Design & Scaling",
        "Engineering Strategy",
        "Executive Communication",
        "Budget & Resource Planning",
        "Hiring & Talent Development",
        "Performance Management",
      ],
    },
    {
      title: "Technical Foundation",
      skills: [
        "Software Architecture",
        "System Design",
        "Cloud Infrastructure (AWS)",
        "Data Engineering",
        "DevOps & CI/CD",
        "API Design",
      ],
    },
    {
      title: "Strategy & Delivery",
      skills: [
        "Roadmap Planning",
        "OKRs & Goal Setting",
        "Technical Debt Strategy",
        "Platform & Product Alignment",
      ],
    },
    {
      title: "People & Culture",
      skills: [
        "Leadership Development",
        "Cross-cultural Leadership",
        "Mentorship & Coaching",
        "Change Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-brand font-mono text-sm tracking-wider uppercase mb-4 block">
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="gradient-text">Competencies</span>
            </h2>
            <p className="text-content-muted text-lg max-w-2xl mx-auto">
              What I bring to the table — from technical architecture
              to building the teams and culture around it.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:border-brand/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-content mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-neutral-subtle text-sm text-content/80 hover:bg-brand/10 hover:text-brand transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
