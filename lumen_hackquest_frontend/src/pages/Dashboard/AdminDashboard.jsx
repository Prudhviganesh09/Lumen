import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import "../../assets/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect click outside of the sidebar to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Collapse sidebar when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar with ref to detect clicks outside */}
      <Sidebar ref={sidebarRef} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="main-content-wrapper">
          {/* Navbar with onClick prop for sidebar toggle */}
          <Navbar onMenuClick={toggleSidebar} />

          {/* Dashboard Header */}
          <div className="dashboard-header">
            <h1>Welcome, Admin</h1>
            <p>Here's an overview of the status and recent activities.</p>
          </div>

          {/* Widgets Section */}
          <div className="dashboard-widgets">
            <div className="widget">
              <h3>Total Products</h3>
              <p>150</p>
            </div>
            <div className="widget">
              <h3>Total Suppliers</h3>
              <p>45</p>
            </div>
            <div className="widget">
              <h3>Low Stock Alerts</h3>
              <p>10</p>
            </div>
            <div className="widget">
              <h3>Pending Orders</h3>
              <p>8</p>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="dashboard-section">
            <h2>Recent Activities</h2>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-01-03</td>
                  <td>Stock added for Product A</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>2025-01-02</td>
                  <td>Order placed for Supplier X</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2025-01-01</td>
                  <td>User Admin created</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Reports Section */}
          <div className="dashboard-section">
            <h2>Reports</h2>
            <div className="dashboard-reports">
              <div className="report-card">Stock Levels Report</div>
              <div className="report-card">Supplier Performance Report</div>
              <div className="report-card">Sales Trends Report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
