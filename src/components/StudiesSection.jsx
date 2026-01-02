import React from "react";
import { motion } from "framer-motion";
import { STUDIES } from "../data/studies";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const studyIcons = {
  'bachelors': <GraduationCap className="h-5 w-5 text-primary-600" />,
  'intermediate': <BookOpen className="h-5 w-5 text-blue-600" />,
  'highschool': <Award className="h-5 w-5 text-amber-600" />
};

export const StudiesSection = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="education-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary-50 text-primary-700">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Journey
          </h2>
          <p className="text-lg text-gray-600">
            My educational background and academic achievements that shaped my technical foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-10 top-0 h-full w-0.5 bg-gray-200">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full border-2 border-primary-500 bg-white group-hover:bg-primary-100 transition-colors" />
              </div>
              
              <motion.div 
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-gray-50">
                      {studyIcons[study.id] || <GraduationCap className="h-5 w-5 text-gray-600" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {study.degree}
                      </h3>
                      <p className="text-sm text-gray-600">{study.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:ml-4">
                    <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                      {study.period}
                    </span>
                    <span className="text-xs font-medium text-white bg-primary-600 px-2.5 py-1 rounded-full">
                      {study.grade}
                    </span>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {study.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-medium text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Continuously learning and expanding my knowledge through online courses and personal projects
          </p>
        </div>
      </div>
    </section>
  );
};
