import React from "react";
import { Row, Col } from "antd";
import FormLogin from "../components/FormLogin";
import LoginImg from "../assets/login.svg";

const Login = () => {
  return (
    <div className="credentials">
      <div className="container">
        <Row justify="space-between">
          <Col xs={24} md={24} lg={10} xl={10}>
            <img className="credentials__img" src={LoginImg} alt="person" />
          </Col>
          <Col xs={24} md={24} lg={12} xl={12}>
            <h1 className="credentials__title">Iniciar Sesión</h1>
            <FormLogin />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
