import React from "react";

const Footer = () => {
  return (
    <div className="app-card flex flex-col items-center justify-between gap-3 bg-slate-950/80 text-xs text-slate-400 sm:flex-row">
      <p>
        © {new Date().getFullYear()} Shaik Siddiq Ahamad. All rights reserved.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="mailto:siddiqshaik053@gmail.com"
          className="hover:text-accent"
        >
          siddiqshaik053@gmail.com
        </a>
        <a
          href="https://github.com/siddiq05"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/siddiq05/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          LeetCode
        </a>
      </div>
    </div>
  );
};

export default Footer;



