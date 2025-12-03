import React from "react";
import Skills from "../components/Skills";

const SkillsPage = () => {
  return (
    <div className="space-y-6">
      <section className="section-fade-up section-shell">
        <p className="section-heading-kicker">Capabilities</p>
        <h1 className="section-heading-main mt-1">
          Skills &amp; tools that power my projects.
        </h1>
        <p className="section-heading-sub mt-2">
          From Java and C++ for problem solving to React and Node.js for
          building production-style web apps.
        </p>
      </section>

      <Skills />
    </div>
  );
};

export default SkillsPage;



