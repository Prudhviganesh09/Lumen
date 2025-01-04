import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Sidebar.css";

const Sidebar = forwardRef(({ isOpen }, ref) => {
  return (
    <div
      ref={ref}
      className={`sidebar ${isOpen ? "open" : "collapsed"}`}
    >
      <div className="sidebar-header">
        <h2>Telecom Inventory</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/products" className="sidebar-link">
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/suppliers" className="sidebar-link">
            <span>Suppliers</span>
          </Link>
        </li>
        <li>
          <Link to="/alerts" className="sidebar-link">
            <span>Alerts</span>
          </Link>
        </li>
        <li>
          <Link to="/reports" className="sidebar-link">
            <span>Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
