import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./global/GlobalStyle";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import refreshToken from "./api/refresh-token";

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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </>
);
