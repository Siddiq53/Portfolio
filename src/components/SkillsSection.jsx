import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../data/skills";
import { Code, Cpu, Database, Layout, Smartphone } from "lucide-react";

const skillIcons = {
  'Frontend': <Layout className="h-5 w-5 text-primary-600" />,
  'Backend': <Cpu className="h-5 w-5 text-blue-600" />,
  'Database': <Database className="h-5 w-5 text-emerald-600" />,
  'DevOps': <Code className="h-5 w-5 text-purple-600" />,
  'Mobile': <Smartphone className="h-5 w-5 text-amber-600" />,
};

const marqueeSkills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker",
  "AWS", "Git", "GraphQL", "REST APIs", "Jest",
  "React Native", "Redux", "Python", "Django", "Firebase"
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary-50 text-primary-700">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Proficiencies
          </h2>
          <p className="text-lg text-gray-600">
            A curated collection of technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  {skillIcons[category.label] || <Code className="h-5 w-5 text-gray-600" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.label}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between group-hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                  >
                    <span className="text-sm text-gray-700">{skill}</span>
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary-200 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Marquee */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white via-white/90 to-white w-16 z-10 pointer-events-none" />
          
          <motion.div
            className="flex items-center gap-8 py-4"
            initial={{ x: 0 }}
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
              <div key={`${skill}-${idx}`} className="flex items-center gap-8">
                <span className={`text-2xl font-medium whitespace-nowrap ${
                  skill === 'Redux' ? 'text-purple-600' : 'text-gray-400'
                }`}>
                  {skill}
                </span>
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            ))}
          </motion.div>
          
          <motion.div
            className="flex items-center gap-8 py-4 mt-2"
            initial={{ x: -1000 }}
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              delay: 20
            }}
          >
            {[...marqueeSkills.reverse(), ...marqueeSkills].map((skill, idx) => (
              <div key={`${skill}-${idx}-2`} className="flex items-center gap-8">
                <span className={`text-2xl font-medium whitespace-nowrap ${
                  skill === 'Redux' ? 'text-purple-500' : 'text-gray-300'
                }`}>
                  {skill}
                </span>
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


