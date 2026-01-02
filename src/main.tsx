import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

/**
 * Theme bootstrap
 * Priority:
 * 1. Saved user preference
 * 2. Default to dark
 */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
