import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
