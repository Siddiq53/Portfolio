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
      className="section-fade-up mb-10 grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]"
    >
      <div className="app-card app-card--gradient">
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]"
        >
          Shaik Siddiq Ahamad
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          Full-Stack Developer &nbsp;|&nbsp; CSE undergrad &nbsp;|&nbsp; 200+
          DSA problems
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base">
          CSE undergraduate skilled in Java, C++, JavaScript and the MERN stack;
          built end-to-end applications like a Doctor Appointment Booking System
          and a Live Location Sharing App, and solved over 200 data structures
          &amp; algorithms problems.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
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

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
          <a
            href="mailto:siddiqshaik053@gmail.com"
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <span aria-hidden="true">📧</span>
            <span>Email</span>
          </a>
          <a
            href="https://github.com/siddiq53"
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

        <div className="mt-6 grid gap-3 text-xs text-[#6B7280] sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#6B7280]">
              DSA problems
            </p>
            <p className="mt-1 text-lg font-semibold text-[#111827]">200+</p>
            <p className="mt-0.5 text-[0.7rem] text-[#6B7280]">
              Strengthening core algorithms and data structures.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#6B7280]">
              End-to-end apps
            </p>
            <p className="mt-1 text-lg font-semibold text-[#111827]">
              Full-Stack
            </p>
            <p className="mt-0.5 text-[0.7rem] text-[#6B7280]">
              MERN, real-time sockets, and production-style flows.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#6B7280]">
              Focus
            </p>
            <p className="mt-1 text-lg font-semibold text-[#111827]">
              Clean &amp; reliable
            </p>
            <p className="mt-0.5 text-[0.7rem] text-[#6B7280]">
              Clear APIs, predictable UIs, and strong DX.
            </p>
          </div>
        </div>
      </div>

      <div className="app-card flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
            Tech snapshot
          </p>
          <p className="mt-2 text-sm text-[#374151]">
            Java • C++ • JavaScript • React • Node.js • Express • MongoDB •
            Tailwind CSS • Socket.IO • Git
          </p>
        </div>
        <div className="mt-4 grid gap-3 text-xs text-[#6B7280]">
          <div className="rounded-2xl bg-[#F3F4F6] p-3">
            <p className="font-semibold text-[#111827]">
              Doctor Appointment Booking
            </p>
            <p className="mt-1 text-xs text-[#6B7280]">
              MERN stack with JWT auth, admin dashboard, time slot grouping and
              Cloudinary uploads.
            </p>
          </div>
          <div className="rounded-2xl bg-[#F3F4F6] p-3">
            <p className="font-semibold text-[#111827]">
              Live Location Sharing
            </p>
            <p className="mt-1 text-xs text-[#6B7280]">
              Node + Socket.IO + Leaflet for real-time collaborative maps and
              sessions.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FFFFFF] p-3 border border-[#E5E7EB]">
            <p className="font-semibold text-[#111827]">
              What I&apos;m exploring
            </p>
            <p className="mt-1 text-xs text-[#6B7280]">
              Better system design, low-latency real-time features, and
              production-grade DX patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
