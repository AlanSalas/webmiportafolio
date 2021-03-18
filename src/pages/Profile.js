import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import Fade from "../components/Common/Fade";
import UserInfo from "../components/UserInfo";
import Modal from "../components/Common/Modal";
import FormEditProfile from "../components/FormEditProfile";
import useAuth from "../hooks/useAuth";
import { getUserData } from "../api/user";

const Profile = ({ reload, setReload }) => {
  const [userId] = useState(localStorage.getItem("userId"));
  const [userData, setUserData] = useState({
    id: null,
    name: "",
    lastName: "",
    position: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    avatar: "",
  });
  const [title, setTitle] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserData(userId);
        const user = response.data.user;
        setUserData({
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          position: user.position || "",
          facebook: user.facebook || "",
          twitter: user.twitter || "",
          instagram: user.instagram || "",
          linkedin: user.linkedin || "",
          youtube: user.youtube || "",
          avatar: user.avatar || "",
        });
      } catch (err) {
        history.push("/error/500");
      }
    };

    getData();
  }, [userId, history]);

  const openModalEdit = () => {
    setTitle("Editar");
    setIsVisibleModal(true);
    setContentModal(
      <FormEditProfile
        userData={userData}
        setUserData={setUserData}
        setReload={setReload}
        setIsVisibleModal={setIsVisibleModal}
      />
    );
  };

  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Fade>
      <div className="profile">
        <UserInfo userId={userId} reload={reload} setReload={setReload} />
        <button className="button" onClick={openModalEdit}>
          Editar perfil
        </button>
        <Modal title={title} isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}>
          {contentModal}
        </Modal>
      </div>
    </Fade>
  );
};

export default Profile;
