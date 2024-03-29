import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";
import Avatar from "../components/Common/Avatar";
import { message } from "antd";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth";
import { getUserData, getProfileImage } from "../api/user";

const Navbar = ({ reload, setReload }) => {
  const { isAuth, logOut } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOpenMenuMobile = () => {
    const links = document.querySelector(".navbar__links");
    links.classList.toggle("visible");
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img className="navbar__brand" src={Logo} alt="webmiportafolio" />
        </Link>
        {isAuth ? (
          <LinksLoggedIn
            handleOpenMenuMobile={handleOpenMenuMobile}
            location={location}
            history={history}
            logOut={logOut}
            reload={reload}
            setReload={setReload}
          />
        ) : (
          <LinksLoggedOut handleOpenMenuMobile={handleOpenMenuMobile} location={location} />
        )}
        <div className="navbar__hamburger-menu" onClick={handleOpenMenuMobile}>
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

const LinksLoggedIn = ({ handleOpenMenuMobile, location, history, logOut, reload, setReload }) => {
  const [userId] = useState(localStorage.getItem("userId"));
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleLogOut = () => {
    logOut();
    message.success("Hasta luego.");
    history.push("/login");
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await getUserData(userId);
        setName(response.data.user.name);
        setUsername(response.data.user.username);
        if (response.data.user.avatar) {
          const image = await getProfileImage("users", response.data.user.avatar);
          setAvatar(image.request.responseURL);
        } else {
          setAvatar(null);
        }
      } catch (err) {
        history.push("/error/500");
      }
    };

    getImage();
    setReload(false);
  }, [history, userId, reload, setReload]);

  return (
    <div className="navbar__links">
      <Link
        to="/dashboard"
        className={`navbar__link ${location.pathname === "/dashboard" ? "active" : ""}`}
        onClick={handleOpenMenuMobile}
      >
        Dashboard
      </Link>
      <Link
        to={`/${username}`}
        className={`navbar__link ${location.pathname === `/${username}` ? "active" : ""}`}
        onClick={handleOpenMenuMobile}
      >
        Portafolio
      </Link>
      <Link to="/perfil" className={"navbar__link"} onClick={handleOpenMenuMobile}>
        <Avatar name={name} size="2rem" fontSize="1rem" avatar={avatar} />
      </Link>
      <PoweroffOutlined className="navbar__link logout" onClick={handleLogOut} />
    </div>
  );
};

const LinksLoggedOut = ({ handleOpenMenuMobile, location }) => {
  return (
    <div className="navbar__links">
      <Link
        to="/login"
        className={`navbar__link ${location.pathname === "/login" ? "active" : ""}`}
        onClick={handleOpenMenuMobile}
      >
        Iniciar Sesión
      </Link>
      <Link
        to="/registro"
        className={`navbar__link ${location.pathname === "/registro" ? "active" : ""}`}
        onClick={handleOpenMenuMobile}
      >
        Registrarse
      </Link>
    </div>
  );
};

export default Navbar;
