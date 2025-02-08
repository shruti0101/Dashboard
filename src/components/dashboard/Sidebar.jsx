import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">🏠 Home</Link>
        </li>
        <li className={location.pathname === "/dummy-list" ? "active" : ""}>
          <Link to="/dummy-list">📋 Dummy List</Link>
        </li>
        <li className={location.pathname === "/settings" ? "active" : ""}>
          <Link to="/dashboard">⚙️ Dashboard</Link>
        </li>


        
        
        <li>Clients</li>
        <li>Schedule</li>
        <li>Settings</li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
