import React from "react";
import NavTabs from "./NavTabs";
import RainBackground from "./RainBackground";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen text-slate-100">
      {/* Rain gradient + canvas background */}
      <RainBackground animate />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-4 pt-4 sm:px-6 lg:px-8">
          <NavTabs />
        </header>

        <main
          className="flex-1 px-4 pb-16 pt-6 sm:px-6 lg:px-8"
          aria-label="Main content"
        >
          {children}
        </main>

        <footer className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;



