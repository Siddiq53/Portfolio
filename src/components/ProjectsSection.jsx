import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { X, ExternalLink, Github, Search } from "lucide-react";

const sortProjects = (projects, sort) => {
  if (sort === "featured") {
    return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  if (sort === "latest") {
    return [...projects].sort((a, b) => b.year - a.year);
  }
  return projects;
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    let base = PROJECTS;
    if (activeCategory !== "All") {
      base = base.filter(
        (p) => p.category === activeCategory || p.tech.includes(activeCategory),
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      base = base.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return sortProjects(base, sort);
  }, [activeCategory, search, sort]);

  return (
    <section
      id="projects"
      className="pt-4"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
              Projects
            </p>
            <h2
              id="projects-heading"
              className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
            >
              Selected work.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
              Real-world projects that combine solid engineering with a calm,
              focused interface.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
            <label className="flex items-center gap-2">
              <span className="hidden sm:inline text-[0.7rem] uppercase tracking-[0.2em]">
                Sort
              </span>
              <motion.select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-border-subtle bg-black/80 px-3 py-2 text-xs text-text-secondary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                whileHover={{ scale: 1.02 }}
              >
                <option value="featured">Featured</option>
                <option value="latest">Latest</option>
              </motion.select>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-accent/20 text-text-primary"
                      : "border-border-subtle bg-black/60 text-text-secondary hover:border-accent/70"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-black/80 px-8 py-2 text-xs text-text-primary placeholder:text-text-secondary/60 outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: "easeOut",
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-[#0B0B0B]/90 shadow-card"
            >
              <div className="relative h-40 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-secondary">
                      {project.description}
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="rounded-full border border-border-subtle bg-black/70 px-2 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-text-secondary hover:border-accent hover:text-text-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Details
                  </motion.button>
                </div>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-border-subtle bg-black/70 px-2 py-0.5 text-[0.7rem] text-text-secondary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-text-secondary hover:text-text-primary"
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-text-secondary hover:text-text-primary"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border-subtle bg-[#050505] p-5 shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {activeProject.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
                      {activeProject.category} • {activeProject.year}
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle bg-black/80 text-text-secondary hover:border-accent hover:text-text-primary"
                    aria-label="Close project details"
                  >
                    <X size={14} />
                  </motion.button>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {activeProject.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    Tech
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeProject.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-border-subtle bg-black/80 px-2.5 py-0.5 text-[0.7rem] text-text-secondary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  {activeProject.liveUrl && (
                    <motion.a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-black/80 px-3 py-1 text-text-secondary hover:border-accent hover:text-text-primary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={14} />
                      <span>View live</span>
                    </motion.a>
                  )}
                  {activeProject.repoUrl && (
                    <motion.a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-black/80 px-3 py-1 text-text-secondary hover:border-accent hover:text-text-primary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github size={14} />
                      <span>View code</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


