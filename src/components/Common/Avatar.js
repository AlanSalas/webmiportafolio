import { useLocation } from "react-router-dom";

const Avatar = ({ name, size, fontSize }) => {
  const location = useLocation();

  return (
    <div
      className={`avatar ${location.pathname === "/perfil" ? "active" : ""}`}
      style={{ height: size, width: size }}
    >
      <span style={{ fontSize: fontSize }}>{name.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
