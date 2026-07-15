import { renderToString } from "react-dom/server";
import Index from "./pages/Index";

export function render(): string {
  return renderToString(<Index />);
}
