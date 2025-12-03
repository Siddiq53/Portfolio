import React from "react";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div className="space-y-10">
      <Hero />

      <section
        aria-labelledby="about-summary"
        className="section-fade-up section-shell"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
          <div>
            <p className="section-heading-kicker">Profile</p>
            <h2
              id="about-summary"
              className="section-heading-main mt-1"
            >
              Builder of practical full‑stack experiences.
            </h2>
            <p className="section-heading-sub mt-2">
              From clean APIs to responsive UIs, I focus on making features feel
              fast, predictable, and production-ready.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              I&apos;m a Computer Science and Engineering undergraduate focused on
              building reliable, user-centric web applications. I enjoy working
              across the stack — from designing REST APIs with Node.js and Express
              to building responsive React frontends styled with Tailwind CSS.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              Recently, I built a Doctor Appointment Booking System using the MERN
              stack with secure JWT authentication, admin panels, time slot
              grouping, and Cloudinary image uploads. I&apos;ve also developed a
              Live Location Sharing App that uses Socket.IO and Leaflet to broadcast
              real-time positions on a collaborative map.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                Snapshot
              </p>
              <ul className="mt-2 space-y-1.5 text-[#4B5563]">
                <li>• Full-stack development with the MERN stack.</li>
                <li>• Real-time communication using Socket.IO.</li>
                <li>• Strong fundamentals with 200+ DSA problems solved.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                What I care about
              </p>
              <ul className="mt-2 space-y-1.5 text-[#4B5563]">
                <li>• Clear abstractions and predictable data flow.</li>
                <li>• Fast feedback loops for both users and developers.</li>
                <li>• Accessible UIs with good defaults and sensible details.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



