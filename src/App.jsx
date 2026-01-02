import React, { Suspense, lazy, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Lazy load sections for better performance
const AboutSection = lazy(() =>
  import("./components/AboutSection").then((module) => ({
    default: module.AboutSection,
  }))
);

const SkillsSection = lazy(() =>
  import("./components/SkillsSection").then((module) => ({
    default: module.SkillsSection,
  }))
);

const ProjectsSection = lazy(() =>
  import("./components/ProjectsSection").then((module) => ({
    default: module.ProjectsSection,
  }))
);

const StudiesSection = lazy(() =>
  import("./components/StudiesSection").then((module) => ({
    default: module.StudiesSection,
  }))
);

const ContactSection = lazy(() =>
  import("./components/ContactSection").then((module) => ({
    default: module.ContactSection,
  }))
);

// Smooth scroll behavior for anchor links
const smoothScroll = () => {
  if (typeof window !== 'undefined') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

const App = () => {
  // Initialize smooth scroll behavior
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,transparent)]" />
      
      {/* Navigation */}
      <Navbar />

      <main className="relative">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100"></div>
                  <div className="text-gray-500">Loading...</div>
                </div>
              </div>
            }
          >
            <HeroSection />
            
            {/* Main content sections with smooth entrance animations */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24 md:space-y-32">
              <motion.section 
                id="about"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <AboutSection />
              </motion.section>

              <motion.section 
                id="skills"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-24"
              >
                <SkillsSection />
              </motion.section>

              <motion.section 
                id="projects"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="scroll-mt-24"
              >
                <ProjectsSection />
              </motion.section>

              <motion.section 
                id="experience"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-24"
              >
                <StudiesSection />
              </motion.section>

              <motion.section 
                id="contact"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <ContactSection />
              </motion.section>
            </div>
          </Suspense>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#111827',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#ffffff',
            },
          },
        }}
      />

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-white rounded-full shadow-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 z-40"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;



