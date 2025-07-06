import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

createRoot(document.getElementById("app-root")).render(
  <StrictMode>
    <DataFetcher />
  </StrictMode>
);
