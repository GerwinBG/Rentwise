import React from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tenants from "./pages/Tenants";
import Apartments from "./pages/Apartments";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apartments" element={<Apartments />}></Route>
        <Route path="/tenants" element={<Tenants />}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
