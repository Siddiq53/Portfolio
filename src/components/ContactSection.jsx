import React, { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="pt-4"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-3 rounded-2xl border border-border-subtle bg-[#0B0B0B]/90 p-6 shadow-card sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
          >
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            Whether it&apos;s a full-stack product, a focused feature, or just an
            idea you want to explore, I&apos;d love to hear from you.
          </p>
          <div className="mt-4 space-y-1 text-sm text-text-secondary">
            <p>
              <span className="text-text-primary">Email:</span>{" "}
              <a
                href="mailto:siddiqshaik053@gmail.com"
                className="underline decoration-accent/60 underline-offset-2 hover:text-text-primary"
              >
                siddiqshaik053@gmail.com
              </a>
            </p>
            <p>
              <span className="text-text-primary">GitHub:</span>{" "}
              <a
                href="https://github.com/siddiq53"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-accent/60 underline-offset-2 hover:text-text-primary"
              >
                github.com/siddiq53
              </a>
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          className="rounded-2xl border border-border-subtle bg-[#050505]/95 p-6 shadow-card sm:p-7"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-text-secondary"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-border-subtle bg-black/80 px-3 py-2 text-sm text-text-primary outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-text-secondary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-border-subtle bg-black/80 px-3 py-2 text-sm text-text-primary outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full resize-none rounded-xl border border-border-subtle bg-black/80 px-3 py-2 text-sm text-text-primary outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Tell me a bit about your project or idea."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="btn-base btn-primary w-full justify-center text-sm disabled:cursor-not-allowed disabled:opacity-60"
              whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </motion.button>

            {status === "success" && (
              <p className="text-xs text-emerald-400">
                Message sent (demo). Wire this form to your backend or email service.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};


