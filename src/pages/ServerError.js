import React from "react";
import { Link } from "react-router-dom";
import Fade from "../components/Common/Fade";
import { Row, Col } from "antd";

const ServerError = () => {
  return (
    <Fade>
      <div className="not-found">
        <div className="container">
          <Row justify="center">
            <Col>
              <h1>500 INTERNAL SERVER ERROR</h1>
              <h2>Tuvimos un problema al realizar tu petición. 😟</h2>
              <Link to="/" className="button">
                Inicio
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </Fade>
  );
};

export default ServerError;
