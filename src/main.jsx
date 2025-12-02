import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";

// Load persisted theme on first load
(function hydrateTheme() {
  try {
    const stored = window.localStorage.getItem("theme");
    const fallback = "dark";
    const theme = stored === "dark" || stored === "muted" ? stored : fallback;
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



