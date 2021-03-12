import React, { useState } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import FormReset from "../components/FormReset";
import { willExpireToken } from "../api/auth";

const ResetPassword = () => {
  const { token } = useParams();
  const isValidToken = /^[0-9a-zA-Z]*\.[0-9a-zA-Z]*\.[0-9a-zA-Z-_]*$/.test(token);
  const [isExpired] = useState(isValidToken ? willExpireToken(token) : null);

  if (!isValidToken) {
    return (
      <Redirect
        to={{
          pathname: "/error/404",
        }}
      />
    );
  }

  return (
    <div className="credentials">
      <div className="container">
        <Row justify="center">
          <Col xs={24} md={24} lg={12} xl={12}>
            <h1 className="credentials__title">Reestablecer contraseña</h1>
            {!isExpired ? <FormReset token={token} /> : <InvalidToken />}
          </Col>
        </Row>
      </div>
    </div>
  );
};

const InvalidToken = () => {
  return (
    <div className="credentials__invalid-token">
      <CloseOutlined className="icon red" />
      <h1>Este enlace ha expirado.</h1>
      <Link to="/recuperar-contrasena" className="button">
        Generar nuevo enlace.
      </Link>
    </div>
  );
};

export default ResetPassword;
