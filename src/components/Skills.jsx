import React from "react";

const skills = [
  { name: "Java", level: 85 },
  { name: "C++", level: 80 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "Tailwind CSS", level: 83 },
  { name: "Socket.IO", level: 72 },
  { name: "Git", level: 85 }
];

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading" className="app-card bg-slate-950/70">
      <h2
        id="skills-heading"
        className="text-xl font-semibold text-slate-50 sm:text-2xl"
      >
        Skills
      </h2>
      <p className="mt-1 text-sm text-slate-300">
        A snapshot of tools and technologies used across full-stack projects.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100"
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-accent to-cyan-400"
                style={{ width: `${skill.level}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



