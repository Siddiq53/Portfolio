import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle/80 bg-black/90">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-[0.75rem] text-text-secondary sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Shaik Siddiq Ahamad. Built with React, Vite,
          Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:siddiqshaik053@gmail.com"
            className="inline-flex items-center gap-1 hover:text-text-primary"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Siddiq53/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-text-primary"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/siddiq05/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-text-primary"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};




