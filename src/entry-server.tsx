import { renderToString } from "react-dom/server";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export function render(url = "/"): string {
  const pathname = new URL(url, "http://localhost").pathname;
  return renderToString(pathname === "/" ? <Index /> : <NotFound />);
}
