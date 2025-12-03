import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="pt-4"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            Where I&apos;ve been learning and building.
          </h2>
        </div>

        <ol className="relative border-l border-border-subtle/80 pl-4 sm:pl-6">
          {EXPERIENCE.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              className="mb-7 last:mb-0"
            >
              <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-accent bg-black" />
              <motion.div
                whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-border-subtle bg-[#0B0B0B]/90 p-4 shadow-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {item.role}
                    </h3>
                    <p className="text-xs text-text-secondary">{item.company}</p>
                  </div>
                  <p className="text-xs text-text-secondary">{item.period}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {item.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.7rem] text-text-secondary">
                  {item.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-border-subtle bg-black/70 px-2 py-0.5"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};


