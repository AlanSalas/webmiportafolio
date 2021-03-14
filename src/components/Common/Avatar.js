import { useLocation } from "react-router-dom";

const Avatar = ({ name, size, fontSize, avatar }) => {
  const location = useLocation();

  return (
    <div
      className={`avatar ${location.pathname === "/perfil" ? "active" : ""}`}
      style={{ height: size, width: size }}
    >
      {avatar ? (
        <img src={avatar} alt={name} />
      ) : (
        <span style={{ fontSize: fontSize }}>{name.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
};

export default Avatar;
