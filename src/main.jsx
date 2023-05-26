import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContextProveedor } from "./components/context";
import Layout from "./components/Layout.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProveedor>
    <Layout />
    </ContextProveedor>
  </React.StrictMode>
);
