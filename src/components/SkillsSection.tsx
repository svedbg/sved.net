const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Leadership & Management",
      skills: [
        "Team Building",
        "Strategic Planning",
        "Performance Management",
        "Stakeholder Communication",
        "Budget Management",
        "Hiring & Retention",
      ],
    },
    {
      title: "Technical Expertise",
      skills: [
        "Node.js",
        "Full Stack Development",
        "AWS",
        "Software Architecture",
        "System Design",
        "Cloud Infrastructure",
        "Data Engineering",
        "DevOps Practices",
        "API Design",
      ],
    },
    {
      title: "Methodologies",
      skills: [
        "Agile / Scrum",
        "Kanban",
        "OKRs",
        "Continuous Delivery",
        "Technical Debt Management",
        "Code Review Culture",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Cross-cultural Leadership",
        "Conflict Resolution",
        "Mentorship",
        "Public Speaking",
        "Technical Writing",
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
              A comprehensive skill set spanning technical expertise, 
              leadership, and organizational development.
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
