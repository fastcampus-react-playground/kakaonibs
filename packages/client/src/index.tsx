import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "react-query";

import theme from "./theme";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new QueryClient();

const rootEl = document.getElementById("root");

const root = rootEl && ReactDOM.createRoot(rootEl);

root?.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Lobby	Profile	TopNavigation	BottomNavigation	SeeMore
