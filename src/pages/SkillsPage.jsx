import React from "react";
import Skills from "../components/Skills";

const SkillsPage = () => {
  return (
    <div className="space-y-6">
      <div className="app-card bg-slate-950/70">
        <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Skills &amp; Tools
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          A mix of languages, frameworks, and developer tools used to ship
          end-to-end features.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default SkillsPage;



