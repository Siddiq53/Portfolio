import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/projects");
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="mb-8 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]"
    >
      <div className="app-card bg-slate-950/70">
        <h1
          id="hero-title"
          className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
        >
          Shaik Siddiq Ahamad
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-accent">
          Full-Stack Developer &nbsp;|&nbsp; CSE undergrad &nbsp;|&nbsp; 200+ DSA
          problems
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          CSE undergraduate skilled in Java, C++, JavaScript and the MERN stack;
          built end-to-end applications like a Doctor Appointment Booking System
          and a Live Location Sharing App, and solved over 200 data structures &amp;
          algorithms problems.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn-base btn-primary"
            onClick={handleViewProjects}
          >
            View Projects
          </button>
          <a
            href="/assets/ShaikSiddiqAhamad.pdf"
            className="btn-base btn-outline"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a
            href="mailto:siddiqshaik053@gmail.com"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <span aria-hidden="true">📧</span>
            <span>Email</span>
          </a>
          <a
            href="https://github.com/siddiq05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <span aria-hidden="true">💻</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <span aria-hidden="true">🔗</span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/siddiq05/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <span aria-hidden="true">🧩</span>
            <span>LeetCode</span>
          </a>
        </div>
      </div>

      <div className="app-card flex flex-col justify-between bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-cyan-900/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Tech snapshot
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Java • C++ • JavaScript • React • Node.js • Express • MongoDB • Tailwind
            CSS • Socket.IO • Git
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="rounded-xl bg-slate-900/60 p-3">
            <p className="font-semibold text-slate-100">
              Doctor Appointment Booking
            </p>
            <p className="mt-1 text-xs text-slate-400">
              MERN stack with JWT auth, admin dashboard and Cloudinary uploads.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 p-3">
            <p className="font-semibold text-slate-100">
              Live Location Sharing
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Node + Socket.IO + Leaflet for real-time collaborative maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



