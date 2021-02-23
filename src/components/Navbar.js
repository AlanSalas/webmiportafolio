import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img className="navbar__brand" src={Logo} alt="webmiportafolio" />
        <div className="navbar__links">
          <Link className="navbar__link">Iniciar Sesión</Link>
          <Link className="navbar__link">Registrarse</Link>
        </div>
        <div className="navbar__hamburger-menu">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
