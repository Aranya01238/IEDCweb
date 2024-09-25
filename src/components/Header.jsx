import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import MenuToggle from "./MenuToggle";
import "./Header.css"; // Import CSS specific to header

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="nav">
          <MenuToggle toggleMenu={toggleMenu} />
        </nav>
      </div>
    </header>
  );
}

export default Header;