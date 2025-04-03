import React  from "react";
import "@/styles/components/navbar.css";
import logo from "@/assets/logo.svg";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
