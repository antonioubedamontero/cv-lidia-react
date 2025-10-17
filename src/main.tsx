import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { MainCurriculum } from "./main-curriculum";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainCurriculum />
  </StrictMode>
);
