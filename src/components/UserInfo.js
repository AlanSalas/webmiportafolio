import React from "react";
import Avatar from "../components/Common/Avatar";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  MailOutlined,
} from "@ant-design/icons";

const UserInfo = () => {
  return (
    <>
      <Row justify="center">
        <Col>
          <Avatar name="Alan" />
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: "3rem" }}>
        <Col>
          <div className="portfolio__intro">
            <h1 className="portfolio__intro-title">Hola mi nombre es Alan Jair Cauich Salas</h1>
            <h2 className="portfolio__intro-carrer">FullStack Developer</h2>
            <div className="portfolio__intro-social">
              <a href="#" target="_blank">
                <FacebookOutlined />
              </a>
              <a href="#" target="_blank">
                <TwitterOutlined />
              </a>
              <a href="#" target="_blank">
                <InstagramOutlined />
              </a>
              <a href="#" target="_blank">
                <LinkedinOutlined />
              </a>
              <a href="#" target="_blank">
                <YoutubeOutlined />
              </a>
              <a href="#" target="_blank">
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
