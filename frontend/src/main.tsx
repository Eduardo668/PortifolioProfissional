import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./global/GlobalStyle";
import "./index.css";
import { BrowserRouter } from "react-router-dom"
import Navigation from "./router";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
  <BrowserRouter>
    <Navigation />
    <GlobalStyle />
  </BrowserRouter>
  
  </>
);
