import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage";
import MainMenuPage from "./pages/MainMenuPage";
import GenerateCORPage from "./pages/GenerateCORPage";
import NoPage from "./pages/NoPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/CEDV2/menu" element={<MainMenuPage />} />
          <Route path="/CEDV2/table" element={<TablePage />} />
          <Route path="/CEDV2/generate" element={<GenerateCORPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
