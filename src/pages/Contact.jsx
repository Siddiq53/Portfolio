import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending message..." });

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        state: "success",
        message: "Message sent (logged on server). Thank you!"
      });
      e.target.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="section-fade-up grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]"
    >
      <div className="app-card app-card--gradient">
        <h1
          id="contact-heading"
          className="text-2xl font-semibold text-[#2B2B2B] sm:text-3xl"
        >
          Contact
        </h1>
        <p className="mt-2 text-sm text-[#6A6A6A]">
          Whether you&apos;re interested in collaborating on a project, have a
          role in mind, or just want to talk tech, feel free to reach out.
        </p>
        <ul className="mt-4 space-y-1 text-sm text-[#6A6A6A]">
          <li>
            <span className="font-medium text-slate-100">Email:</span>{" "}
            <a
              href="mailto:siddiqshaik053@gmail.com"
              className="hover:text-accent"
            >
              siddiqshaik053@gmail.com
            </a>
          </li>
          <li>
            <span className="font-medium text-slate-100">GitHub:</span>{" "}
            <a
              href="https://github.com/siddiq05"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              github.com/siddiq05
            </a>
          </li>
          <li>
            <span className="font-medium text-slate-100">LeetCode:</span>{" "}
            <a
              href="https://leetcode.com/u/siddiq05/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              leetcode.com/u/siddiq05
            </a>
          </li>
        </ul>
      </div>

      <div className="app-card">
        <h2 className="text-lg font-semibold text-[#2B2B2B]">
          Quick message
        </h2>
        <p className="mt-1 text-xs text-[#6A6A6A]">
          This form posts to a sample Vercel serverless function and logs the
          payload. Wire it up to your email provider or notification system
          before using in production.
        </p>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-[#2B2B2B]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-[rgba(148,116,80,0.35)] bg-white px-3 py-2 text-sm text-[#2B2B2B] outline-none focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-[#2B2B2B]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-[rgba(148,116,80,0.35)] bg-white px-3 py-2 text-sm text-[#2B2B2B] outline-none focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-[#2B2B2B]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full resize-none rounded-lg border border-[rgba(148,116,80,0.35)] bg-white px-3 py-2 text-sm text-[#2B2B2B] outline-none focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)]"
              placeholder="How can we collaborate?"
            />
          </div>

          <button
            type="submit"
            className="btn-base btn-primary text-sm"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Sending..." : "Send message"}
          </button>

          {status.state !== "idle" && (
            <p
              className={`mt-1 text-xs ${
                status.state === "success"
                  ? "text-emerald-400"
                  : status.state === "error"
                  ? "text-red-400"
                  : "text-slate-300"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;



