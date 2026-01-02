import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { X, ExternalLink, Github, Search, ArrowRight } from "lucide-react";

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
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary-50 text-primary-700">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-gray-600">
            Real-world projects that combine solid engineering with a clean,
            focused interface.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-8 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <motion.button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
                      whileHover={{ x: 2 }}
                    >
                      Details <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500 border border-gray-100">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary-600 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                        title="View Code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.target === e.currentTarget && setActiveProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div className="relative h-64 bg-gray-100">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${activeProject.image})` }}
                  />
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-1.5 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors"
                    aria-label="Close project details"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {activeProject.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full bg-primary-100 px-3 py-0.5 text-xs font-medium text-primary-800">
                          {activeProject.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          • {activeProject.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {activeProject.liveUrl && (
                        <motion.a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {activeProject.repoUrl && (
                        <motion.a
                          href={activeProject.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={14} />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">About the Project</h4>
                      <p className="text-gray-600">
                        {activeProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


