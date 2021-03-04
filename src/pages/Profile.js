import React from "react";
import UserInfo from "../components/UserInfo";

const Profile = () => {
  return (
    <div className="profile">
      <UserInfo />
      <button className="button">Editar perfil</button>
    </div>
  );
};

export default Profile;
