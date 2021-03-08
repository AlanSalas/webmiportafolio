import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <Row justify="center">
          <Col>
            <h1>404 NOT FOUND</h1>
            <h2>¿Qué estas buscando? 🧐</h2>
            <Link to="/" className="button">
              Inicio
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotFound;
