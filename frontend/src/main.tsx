import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./global/GlobalStyle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
