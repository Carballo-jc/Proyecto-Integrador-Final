import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProveedor } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProveedor>
      <App />
    </ContextProveedor>
  </React.StrictMode>
);
