import React, { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import { Footer } from "./components/Footer";

const AboutSection = lazy(() =>
  import("./components/AboutSection").then((module) => ({
    default: module.AboutSection,
  })),
);
const SkillsSection = lazy(() =>
  import("./components/SkillsSection").then((module) => ({
    default: module.SkillsSection,
  })),
);
const ProjectsSection = lazy(() =>
  import("./components/ProjectsSection").then((module) => ({
    default: module.ProjectsSection,
  })),
);
const ExperienceSection = lazy(() =>
  import("./components/ExperienceSection").then((module) => ({
    default: module.ExperienceSection,
  })),
);
const ContactSection = lazy(() =>
  import("./components/ContactSection").then((module) => ({
    default: module.ContactSection,
  })),
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-28 lg:space-y-32 py-16 sm:py-20 lg:py-24">
          <HeroSection />
          <Suspense
            fallback={
              <div className="space-y-10 text-text-secondary">
                <div className="h-40 w-full rounded-2xl bg-[#050505]/80" />
                <div className="h-64 w-full rounded-2xl bg-[#050505]/80" />
              </div>
            }
          >
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;



