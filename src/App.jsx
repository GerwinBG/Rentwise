import React from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tenants from "./pages/Tenants";
import Apartments from "./pages/Apartments";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="content">
            <Navbar />
            <div className="d-flex contentWrap">
              <div className="d-none d-lg-block sidebar">
                <Sidebar />
              </div>
              <div className="d-flex justify-content-center align-items-center w-100">
                <Dashboard />
              </div>

            </div>
          </div>
        } />

        <Route path="/apartments" element={
          <>
            <div className="content">
              <Navbar />
              <div className="d-flex contentWrap">
                <div className="d-none d-lg-block sidebar">
                  <Sidebar />
                </div>
                <div className="d-flex justify-content-center align-items-center w-100 overflow-auto">
                  <Apartments />
                </div>

              </div>
            </div>
          </>
        } />
        <Route path="/tenants" element={
          <>
            <div className="content">
              <Navbar />
              <div className="d-flex contentWrap">
                <div className="d-none d-lg-block sidebar">
                  <Sidebar />
                </div>
                <div className="d-flex justify-content-center align-items-center w-100 overflow-auto">
                  <Tenants />
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
