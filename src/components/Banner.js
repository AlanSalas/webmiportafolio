import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Resume from "../assets/resume.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Row>
          <Col sm={24} md={24} lg={13} xl={12}>
            <Row>
              <div className="banner__circle"></div>
            </Row>
            <Row>
              <h1 className="banner__copy">
                Muestra <br /> Tu <br /> Experiencia <br /> Al mundo
              </h1>
            </Row>
            <Row style={{ marginBottom: "2rem" }}>
              <Link className="button" to="/registro">
                Registrarse
              </Link>
            </Row>
          </Col>
          <Col sm={24} md={24} lg={11} xl={12}>
            <Row>
              <img className="banner__img" src={Resume} alt="resume" />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
