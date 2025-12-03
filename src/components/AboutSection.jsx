import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative pt-4"
      aria-labelledby="about-heading"
    >
      {/* Floating glow shapes */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: [20, -10, 20] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-6 h-52 w-52 rounded-full bg-purple-900/40 blur-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: [-20, 10, -20] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-2xl border border-border-subtle bg-[#0B0B0B]/90 p-6 shadow-card sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            Builder of considered, end-to-end experiences.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            I&apos;m a Computer Science and Engineering undergraduate who enjoys
            working across the stack—from shaping interfaces in React to
            designing APIs in Node.js and MongoDB. I care about shipping
            features that feel fast, predictable, and effortless to use.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-text-secondary sm:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-border-subtle bg-black/60 p-4"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-text-secondary">
                DSA practice
              </p>
              <p className="mt-1 text-lg font-semibold text-text-primary">
                200+ problems
              </p>
              <p className="mt-1 text-xs">
                Strengthening problem-solving with daily practice on core data
                structures and algorithms.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-border-subtle bg-black/60 p-4"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-text-secondary">
                Projects
              </p>
              <p className="mt-1 text-lg font-semibold text-text-primary">
                Full-stack
              </p>
              <p className="mt-1 text-xs">
                From appointment booking platforms to real-time location
                sharing, I like shipping real products.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-border-subtle bg-black/60 p-4"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-text-secondary">
                Experience
              </p>
              <p className="mt-1 text-lg font-semibold text-text-primary">
                Hands-on
              </p>
              <p className="mt-1 text-xs">
                Collaborating with teams, leading campus projects, and learning
                from shipping to production.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
