import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Production builds ship prerendered HTML (see scripts/prerender.mjs);
// hydrate it instead of rendering from scratch. Dev serves an empty root.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
