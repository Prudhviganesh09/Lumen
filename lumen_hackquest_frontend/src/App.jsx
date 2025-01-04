import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// import ManagerDashboard from "./pages/Dashboard/ManagerDashboard";
import Login from "./pages/Authentication/Login";
import RegisterUser from "./pages/Authentication/RegisterUser";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/" element={<AdminDashboard />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
};

export default App;
