import React from "react";
import ReactDOM from "react-dom/client";
import { ReactLenis } from "lenis/react";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ReactLenis
    root
    options={{
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
    }}
  >
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ReactLenis>
  // </React.StrictMode>
);