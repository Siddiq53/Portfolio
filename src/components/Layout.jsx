import React from "react";
import NavTabs from "./NavTabs";
import RainBackground from "./RainBackground";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#F9FAFB] text-[#111827]">
      {/* Subtle background, no heavy gradients */}
      <RainBackground animate={false} />

      <div className="relative z-10 flex min-h-screen flex-col px-4 sm:px-6 lg:px-8">
        <div className="page-shell flex min-h-screen flex-col">
          <header className="py-4 sticky top-4 z-20">
            <NavTabs />
          </header>

          <main
            className="flex-1 pb-16 pt-4 space-y-10"
            aria-label="Main content"
          >
            {children}
          </main>

          <footer className="pb-8 pt-2">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;



