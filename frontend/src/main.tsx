import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./global/GlobalStyle";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./router/router";
import { QueryClient, QueryClientProvider } from "react-query";
import refreshToken from "./api/refresh-token";
import { accessToken } from "./api/login";

const queryClient = new QueryClient();

window.onload = ()=>{
    refreshToken();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={queryClient} >
        <Navigation />
        <GlobalStyle />
      </QueryClientProvider>
    </BrowserRouter>
  </>
);
