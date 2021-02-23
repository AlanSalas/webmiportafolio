import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const FormRegistro = () => {
  return (
    <div className="form-credentials">
      <Form noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="email" hasFeedback>
              <Input
                className="input"
                name="email"
                prefix={<MailOutlined />}
                placeholder="Correo electronico"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="password" hasFeedback>
              <Input.Password
                className="input"
                name="password"
                prefix={<LockOutlined />}
                placeholder="Contraseña"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <Link className="form-credentials__forgot">¿Olvidaste tu contraseña?</Link>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <button className="button" type="submit">
                Iniciar
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormRegistro;
