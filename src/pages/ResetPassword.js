import React from "react";
import { Row, Col } from "antd";
import FormReset from "../components/FormReset";

const ResetPassword = () => {
  return (
    <div className="credentials">
      <div className="container">
        <Row justify="center">
          <Col xs={24} md={24} lg={12} xl={12}>
            <h1 className="credentials__title">Reestablecer contraseña</h1>
            <FormReset />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
