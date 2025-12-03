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
    <section
      aria-labelledby="skills-heading"
      className="app-card app-card--gradient bg-slate-950/80"
    >
      <h2
        id="skills-heading"
        className="text-xl font-semibold text-[#2B2B2B] sm:text-2xl"
      >
        Skills
      </h2>
      <p className="mt-1 text-sm text-[#6A6A6A]">
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

      <div className="mt-4 grid gap-3 text-[0.7rem] text-slate-400 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-800/80 bg-slate-950/70 px-3 py-2">
          <p className="font-semibold text-slate-200">Core languages</p>
          <p className="mt-1">
            Java and C++ for solving DSA problems and building performant
            back-end logic.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800/80 bg-slate-950/70 px-3 py-2">
          <p className="font-semibold text-slate-200">Frontend</p>
          <p className="mt-1">
            React + Tailwind CSS for building responsive, accessible interfaces.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800/80 bg-slate-950/70 px-3 py-2">
          <p className="font-semibold text-slate-200">Backend &amp; realtime</p>
          <p className="mt-1">
            Node.js, Express, MongoDB and Socket.IO for REST APIs and live
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;



