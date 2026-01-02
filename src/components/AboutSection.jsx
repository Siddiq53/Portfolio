import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      {/* Decorative elements */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-10 h-40 w-40 rounded-full bg-primary-100/50 blur-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: [20, -10, 20] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-6 h-52 w-52 rounded-full bg-accent-100/40 blur-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: [-20, 10, -20] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-shell"
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary-50 text-primary-700">
              About Me
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Builder of considered, end-to-end experiences
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              I'm a Computer Science and Engineering undergraduate who enjoys
              working across the stack—from shaping interfaces in React to
              designing APIs in Node.js and MongoDB. I care about shipping
              features that feel fast, predictable, and effortless to use.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">200+ Problems</h3>
              <p className="text-gray-600 text-sm">
                Strengthening problem-solving with daily practice on core data structures and algorithms.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-50 text-accent-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 01.812 0l6 3a1 1 0 010 1.84l-6 3a1 1 0 01-.812 0l-6-3a1 1 0 010-1.84l6-3z" />
                  <path d="M15.434 8.5l-5.42 2.9a1 1 0 01-.972 0L3.566 8.5a1 1 0 010-1.828l5.42-2.9a1 1 0 01.972 0l5.42 2.9a1 1 0 010 1.828z" />
                  <path d="M15.434 12.5l-5.42 2.9a1 1 0 01-.972 0l-5.42-2.9a1 1 0 010-1.828l5.42-2.9a1 1 0 01.972 0l5.42 2.9a1 1 0 010 1.828z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Stack Projects</h3>
              <p className="text-gray-600 text-sm">
                From appointment booking platforms to real-time location sharing, I like shipping real products.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-50 text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-on Experience</h3>
              <p className="text-gray-600 text-sm">
                Collaborating with teams, leading campus projects, and learning from shipping to production.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
