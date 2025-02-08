import React from "react";
import { useSelector } from "react-redux"; 
import "./Header.css";

const Header = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const user = useSelector((state) => state.auth.user); 

  return (
    <div className="header">
      <h1>Welcome Back, {user ? user.name : "Guest"}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Header;
