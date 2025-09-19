
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // <-- must match path & case exactly
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);