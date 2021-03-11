import React, { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { willExpireToken, activateUser, sendEmailToActivate } from "../api/auth";
import jwtDecode from "jwt-decode";
import { Row, Col, message } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Activation = () => {
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
    <div className="activation">
      <div className="container">
        <Row justify="center">
          <Col>{!isExpired ? <ValidToken token={token} /> : <InvalidToken token={token} />}</Col>
        </Row>
      </div>
    </div>
  );
};

const ValidToken = ({ token }) => {
  const history = useHistory();

  const handleActivate = async () => {
    try {
      const response = await activateUser(token);
      if (response.status === 200) {
        message.success(response.data.message);
      } else {
        message.error(response.data.err);
        history.push("/login");
      }
    } catch (err) {
      message.error(err);
    }
  };

  return (
    <>
      <CheckOutlined className="icon green" />
      <h1>Activa tu cuenta</h1>
      <button className="button" onClick={handleActivate}>
        Activar
      </button>
    </>
  );
};

const InvalidToken = ({ token }) => {
  const history = useHistory();
  const decodeToken = jwtDecode(token);

  const handleSendEmail = async () => {
    try {
      const response = await sendEmailToActivate(decodeToken.id);
      if (response.status === 200) {
        message.success(response.data.message);
      } else {
        message.error(response.data.err);
        history.push("/login");
      }
    } catch (err) {
      message.error(err);
    }
  };

  return (
    <>
      <CloseOutlined className="icon red" />
      <h1>Este link ha expirado</h1>
      <button className="button" onClick={handleSendEmail}>
        Generar nuevo link
      </button>
    </>
  );
};

export default Activation;
