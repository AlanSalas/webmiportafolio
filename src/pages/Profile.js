import React from "react";
import { Redirect } from "react-router";
import Fade from "../components/Common/Fade";
import UserInfo from "../components/UserInfo";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Fade>
      <div className="profile">
        <UserInfo />
        <button className="button">Editar perfil</button>
      </div>
    </Fade>
  );
};

export default Profile;
