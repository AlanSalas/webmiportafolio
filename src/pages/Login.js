import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "antd";
import Fade from "../components/Common/Fade";
import FormLogin from "../components/FormLogin";
import LoginImg from "../assets/login.svg";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fade>
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
    </Fade>
  );
};

export default Login;
