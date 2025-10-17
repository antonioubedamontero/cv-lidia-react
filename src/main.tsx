import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Curriculum } from "./curriculum";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Curriculum />
  </StrictMode>
);
