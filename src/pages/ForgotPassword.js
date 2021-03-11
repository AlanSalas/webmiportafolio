import React from "react";
import { Row, Col } from "antd";
import Fade from "../components/Common/Fade";
import ForgotImg from "../assets/forgot.svg";
import FormForgot from "../components/FormForgot";

const ForgotPassword = () => {
  return (
    <Fade>
      <div className="credentials">
        <div className="container">
          <Row justify="space-between">
            <Col lg={10} xl={10}>
              <img className="credentials__img" src={ForgotImg} alt="person thinking" />
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <h1 className="credentials__title">Recuperar contraseña</h1>
              <p className="credentials__help">
                Te enviaremos un enlace a tu correo para que puedas reestablecer tu contraseña.
              </p>
              <FormForgot />
            </Col>
          </Row>
        </div>
      </div>
    </Fade>
  );
};

export default ForgotPassword;
