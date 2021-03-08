import React from "react";
import { Redirect } from "react-router";
import UserInfo from "../components/UserInfo";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <div className="profile">
      <UserInfo />
      <button className="button">Editar perfil</button>
    </div>
  );
};

export default Profile;
