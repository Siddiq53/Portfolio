import React from "react";

const Blog = () => {
  return (
    <section className="section-fade-up space-y-4">
      <div className="app-card bg-slate-950/80">
        <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Blog &amp; Notes
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Long-form notes on building MERN apps, deploying to the cloud, and
          tackling DSA problems in a structured way.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="app-card bg-slate-950/80">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Coming soon
          </h2>
          <p className="mt-2 text-base font-semibold text-slate-50">
            Building a Doctor Appointment Booking System from zero to deploy
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Designing the data model, securing routes with JWT, structuring the
            React front-end, and deploying the full MERN stack.
          </p>
        </article>

        <article className="app-card bg-slate-950/80">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Coming soon
          </h2>
          <p className="mt-2 text-base font-semibold text-slate-50">
            Lessons from building a real-time location sharing app
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Socket rooms, handling disconnects, keeping maps responsive, and
            thinking about scalability early.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Blog;



