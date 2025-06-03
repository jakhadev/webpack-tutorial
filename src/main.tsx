import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import { BrowserRouter } from "react-router";
import "./global.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
