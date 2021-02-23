import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img className="navbar__brand" src={Logo} alt="webmiportafolio" />
        </Link>
        <div className="navbar__links">
          <Link
            to="/login"
            className={`navbar__link ${location.pathname === "/login" ? "active" : ""}`}
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/registro"
            className={`navbar__link ${location.pathname === "/registro" ? "active" : ""}`}
          >
            Registrarse
          </Link>
        </div>
        <div className="navbar__hamburger-menu">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
