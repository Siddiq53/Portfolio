import React from "react";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div className="space-y-6">
      <Hero />

      <section
        aria-labelledby="about-summary"
        className="app-card bg-slate-950/70"
      >
        <h2
          id="about-summary"
          className="text-xl font-semibold text-slate-50 sm:text-2xl"
        >
          About
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m a Computer Science and Engineering undergraduate focused on
          building reliable, user-centric web applications. I enjoy working
          across the stack — from designing REST APIs with Node.js and Express
          to building responsive React frontends styled with Tailwind CSS.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Recently, I built a Doctor Appointment Booking System using the MERN
          stack with secure JWT authentication, admin panels, time slot
          grouping, and Cloudinary image uploads. I&apos;ve also developed a
          Live Location Sharing App that uses Socket.IO and Leaflet to broadcast
          real-time positions on a collaborative map.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Outside of projects, I regularly solve data structures and algorithms
          problems, with over 200 problems completed on platforms like LeetCode
          to strengthen my problem-solving and coding fundamentals.
        </p>
      </section>
    </div>
  );
};

export default About;



