import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../data/skills";

const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.IO",
  "Git",
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="pt-2"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            A focused toolkit for modern web products.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Languages, frameworks, and tools I use to design, build, and ship
            production-ready interfaces and APIs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-2xl border border-border-subtle bg-[#0B0B0B]/80 p-4 shadow-card transition-colors hover:border-accent/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary">
                {category.label}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-text-secondary">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="truncate">{skill}</span>
                    <span className="h-[3px] w-7 rounded-full bg-gradient-to-r from-accent to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Rolling marquee */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-border-subtle bg-[#050505]/80 py-3">
          <motion.div
            className="flex min-w-max items-center gap-6 px-6 text-xs text-text-secondary"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="whitespace-nowrap rounded-full border border-border-subtle bg-black/70 px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


