import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated skeleton loading, replace with real data fetching if needed.
    const id = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <section aria-labelledby="projects-heading" className="space-y-4">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            id="projects-heading"
            className="text-2xl font-semibold text-slate-50 sm:text-3xl"
          >
            Projects
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Selected work showcasing full-stack skills and real-time
            experiences.
          </p>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          loading={loading}
          title="Doctor Appointment Booking System"
          description="MERN stack application with admin login, JWT-secured authentication, appointment booking, Cloudinary image uploads, and intelligent time slot grouping for doctors and patients."
          tech={[
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "JWT",
            "Cloudinary",
            "Tailwind CSS",
          ]}
          tags={["MERN", "Full-Stack", "Production-style"]}
          liveUrl="https://example.com/doctor-appointment-demo"
          repoUrl="https://github.com/your-username/doctor-appointment-booking"
        />
        <ProjectCard
          loading={loading}
          title="Live Location Sharing App"
          description="Real-time location sharing platform using Node, Socket.IO, and Leaflet to broadcast user positions and render collaborative maps with smooth updates."
          tech={["Node.js", "Socket.IO", "Leaflet", "JavaScript"]}
          tags={["Real-time", "WebSockets", "Maps"]}
          liveUrl="https://example.com/live-location-demo"
          repoUrl="https://github.com/your-username/live-location-sharing"
        />
      </div>
    </section>
  );
};

export default Projects;
