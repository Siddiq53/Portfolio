import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Shaik Siddiq Ahamad. Built with React, Vite,
            Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="mailto:siddiqshaik053@gmail.com"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/Siddiq53/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddiq05/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
