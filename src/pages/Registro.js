import React from "react";
import { Row, Col } from "antd";
import FormRegistro from "../components/FormRegistro";
import Person from "../assets/person.svg";

const Registro = () => {
  return (
    <div className="credentials">
      <div className="container">
        <Row justify="space-between">
          <Col xs={24} md={24} lg={10} xl={10}>
            <img className="credentials__img" src={Person} alt="person" />
          </Col>
          <Col xs={24} md={24} lg={12} xl={12}>
            <h1 className="credentials__title">Registro</h1>
            <FormRegistro />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Registro;
