import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import Header from "./dashboard/Header";
import Earnings from "./dashboard/Earnings";
import ClientActivity from "./dashboard/ClientActivity";
import Schedule from "./dashboard/Schedule";
import "../styles/global.css";
import "../styles/dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="widgets">
          <Earnings />
          <ClientActivity />
          <Schedule />
        </div>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
