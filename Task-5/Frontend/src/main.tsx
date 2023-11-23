import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ButtonAppBar from "./components/Header.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ButtonAppBar></ButtonAppBar>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
