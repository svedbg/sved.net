import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Production builds ship HTML prerendered for "/" (see scripts/prerender.mjs).
// Hydrate only when the current path matches that markup; on any other path
// (e.g. SPA-fallback serving index.html for an unknown URL) or in dev, where
// the root is empty, render from scratch instead.
if (root.hasChildNodes() && window.location.pathname === "/") {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
