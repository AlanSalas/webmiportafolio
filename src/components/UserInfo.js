import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../components/Common/Avatar";
import { Row, Col } from "antd";
import { getUserData, getProfileImage } from "../api/user";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  MailOutlined,
} from "@ant-design/icons";

const UserInfo = ({ userId, reload, setReload }) => {
  const [userData, setUserData] = useState({});
  const [avatar, setAvatar] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserData(userId);
        setUserData(response.data.user);
        if (response.data.user.avatar) {
          const image = await getProfileImage("users", response.data.user.avatar);
          if (image.status === 200) {
            setAvatar(image.request.responseURL);
          }
        } else {
          setAvatar(null);
        }
      } catch (err) {
        history.push("/error/500");
      }
    };

    setReload(false);

    getData();
  }, [history, userId, reload]);

  return (
    <>
      <Row justify="center">
        <Col>
          <Avatar name="Alan" size="9rem" fontSize="3rem" avatar={avatar} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: "3rem" }}>
        <Col>
          <div className="portfolio__intro">
            <h1 className="portfolio__intro-title">
              Hola mi nombre es {userData.name} {userData.lastName}
            </h1>
            <h2 className="portfolio__intro-carrer">
              {userData.position ? userData.position : "¿A qué te dedicas?"}
            </h2>
            <div className="portfolio__intro-social">
              {userData.facebook && (
                <a href={`https://www.facebook.com/${userData.facebook}`} target="_blank">
                  <FacebookOutlined />
                </a>
              )}
              {userData.twitter && (
                <a href={`https://www.twitter.com/${userData.twitter}`} target="_blank">
                  <TwitterOutlined />
                </a>
              )}
              {userData.instagram && (
                <a href={`https://www.instagram.com/${userData.instagram}`} target="_blank">
                  <InstagramOutlined />
                </a>
              )}
              {userData.linkedin && (
                <a href={`https://www.linkedin.com/in/${userData.linkedin}`} target="_blank">
                  <LinkedinOutlined />
                </a>
              )}
              {userData.youtube && (
                <a href={`https://www.youtube.com/channel/${userData.youtube}`} target="_blank">
                  <YoutubeOutlined />
                </a>
              )}
              <a href={`mailto:${userData.email}`}>
                <MailOutlined />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UserInfo;
