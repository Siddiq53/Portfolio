import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

const TABS = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

// Accessible square-tab navigation with mobile hamburger
const NavTabs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    // Close mobile menu on route change
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const renderTab = (tab, idx, isMobile = false) => (
    <NavLink
      key={tab.path}
      to={tab.path}
      end={tab.path === "/"}
      className={({ isActive }) =>
        [
          "nav-tab focus-ring",
          isMobile ? "w-full h-14 flex-row" : "w-24 h-24",
          isActive ? "nav-tab--active" : "",
        ].join(" ")
      }
      role="tab"
      aria-selected={
        location.pathname === tab.path ||
        (tab.path === "/" && location.pathname === "/")
      }
      aria-posinset={idx + 1}
      aria-setsize={TABS.length}
      tabIndex={0}
    >
      <span className="text-sm">{tab.label}</span>
    </NavLink>
  );

  return (
    <nav
      aria-label="Primary"
      className="app-card flex items-center justify-between gap-4 bg-white/90 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#E5E7EB] text-[#111827] shadow-md">
          SSA
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#111827]">
            Shaik Siddiq Ahamad
          </span>
          <span className="text-xs text-[#6B7280]">Full-Stack Developer</span>
        </div>
      </div>

      {/* Desktop tab list */}
      <div
        role="tablist"
        aria-label="Main sections"
        className="hidden gap-2 md:flex"
      >
        {TABS.map((tab, idx) => renderTab(tab, idx))}
      </div>

      <div className="flex items-center gap-2">
        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#4B5563] focus-ring md:hidden"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-[#111827]" />
            <span className="block h-0.5 w-4 rounded-full bg-[#6B7280]" />
            <span className="block h-0.5 w-3 rounded-full bg-[#9CA3AF]" />
          </span>
        </button>
      </div>

      {/* Mobile stacked square buttons */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute left-0 right-0 top-[4.25rem] z-30 mx-4 mt-2 rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.18)] md:hidden"
        >
          <div
            role="tablist"
            aria-label="Main sections mobile"
            className="flex flex-col gap-2"
          >
            {TABS.map((tab, idx) => renderTab(tab, idx, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavTabs;
