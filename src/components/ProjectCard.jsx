import React from "react";

const ProjectCard = ({
  title,
  description,
  tech = [],
  tags = [],
  liveUrl,
  repoUrl,
  loading = false,
  featured = false
}) => {
  if (loading) {
    return (
      <article className="app-card flex flex-col gap-3" aria-busy="true">
        <div className="h-5 w-2/3 rounded skeleton" />
        <div className="h-4 w-full rounded skeleton" />
        <div className="h-4 w-5/6 rounded skeleton" />
        <div className="mt-2 flex gap-2">
          <span className="h-6 w-16 rounded-full skeleton" />
          <span className="h-6 w-20 rounded-full skeleton" />
          <span className="h-6 w-14 rounded-full skeleton" />
        </div>
        <div className="mt-4 flex gap-2">
          <span className="h-9 w-24 rounded-full skeleton" />
          <span className="h-9 w-24 rounded-full skeleton" />
        </div>
      </article>
    );
  }

  return (
    <article
      className={`app-card ${
        featured ? "app-card--gradient border border-accent/60" : ""
      }`}
      aria-label={title}
    >
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-[#2B2B2B]">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-[#6A6A6A]">
            {tags.join(" • ")}
          </p>
        </div>
        {featured && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-300">
            Featured
          </span>
        )}
      </header>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>

      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-600/80 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        {liveUrl && (
          <a
            href="https://al-husainy-care-frontend-6v2k89xtb.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-primary text-xs"
          >
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-outline text-xs"
          >
            View Repo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;



