import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const ALL_PROJECTS = [
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking System",
    description:
      "MERN stack application with admin login, JWT-secured authentication, appointment booking, Cloudinary image uploads, and intelligent time slot grouping for doctors and patients.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    tags: ["MERN", "Full-Stack", "Production-style"],
    liveUrl: "https://example.com/doctor-appointment-demo",
    repoUrl: "https://github.com/your-username/doctor-appointment-booking",
    category: "fullstack",
    featured: true,
  },
  {
    id: "live-location",
    title: "Live Location Sharing App",
    description:
      "Real-time location sharing platform using Node, Socket.IO, and Leaflet to broadcast user positions and render collaborative maps with smooth updates.",
    tech: ["Node.js", "Socket.IO", "Leaflet", "JavaScript"],
    tags: ["Real-time", "WebSockets", "Maps"],
    liveUrl: "https://example.com/live-location-demo",
    repoUrl: "https://github.com/your-username/live-location-sharing",
    category: "realtime",
    featured: false,
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "realtime", label: "Real-time" },
];

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Simulated skeleton loading, replace with real data fetching if needed.
    const id = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(id);
  }, []);

  const visibleProjects =
    activeFilter === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      aria-labelledby="projects-heading"
      className="section-fade-up space-y-5"
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            id="projects-heading"
            className="text-2xl font-semibold text-slate-50 sm:text-3xl"
          >
            Projects
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Real-world, full-stack projects with a focus on reliability, DX, and
            real-time experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`btn-base text-xs ${
                  isActive
                    ? "btn-primary"
                    : "btn-outline !border-slate-700/80 !bg-slate-950/70"
                }`}
                aria-pressed={isActive}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            loading={loading}
            title={project.title}
            description={project.description}
            tech={project.tech}
            tags={project.tags}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
            featured={project.featured}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
