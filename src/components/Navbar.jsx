import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 80;
  window.scrollTo({ top: offset, behavior: "smooth" });
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/60 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => handleNavClick("hero")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-purple-900 text-sm font-semibold">
            SSA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text-primary">
              Shaik Siddiq Ahamad
            </span>
            <span className="text-xs text-text-secondary">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-medium text-text-secondary sm:flex">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="relative rounded-full px-3 py-1.5 text-[0.78rem] tracking-wide transition-colors hover:text-text-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-black/60 text-text-primary hover:border-accent/80 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-b border-border-subtle/80 bg-black/95 sm:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-4 pt-1 text-sm text-text-secondary">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg-white/5 hover:text-text-primary"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};


