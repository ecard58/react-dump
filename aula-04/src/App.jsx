import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contato from "./pages/contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/:user" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/:parametro" element={<Login />} />
      <Route path="/contato" element={<Contato />} />

      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
