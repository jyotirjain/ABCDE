import React from "react";
import "../../assets/css/styles.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute top-[20px] left-[20px] ">
      <Link to="/">
      <img className="w-[199px]" src={logo} alt="logo" />
      </Link>
      
    </div>
  );
}

export default Navbar;
