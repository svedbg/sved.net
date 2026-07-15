// Injects the server-rendered markup into dist/index.html so crawlers
// that don't execute JavaScript still see the full page content.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));
const html = render();

const indexPath = resolve(root, "dist/index.html");
const template = readFileSync(indexPath, "utf-8");
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`Could not find ${marker} in dist/index.html`);
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${html}</div>`));
rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log("Prerendered dist/index.html");
