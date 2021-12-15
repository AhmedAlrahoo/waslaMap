import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Map from "./components/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Map />} />
      <Route path="/Reg" element={<App />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
