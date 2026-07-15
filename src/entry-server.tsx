import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export function render(url = "/"): string {
  const pathname = new URL(url, "http://localhost").pathname;
  return renderToString(
    <StaticRouter location={pathname}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StaticRouter>
  );
}
