import React from "react";
import { Row, Col, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

const FormRegistro = () => {
  return (
    <div className="form-credentials">
      <Form noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="name" hasFeedback>
              <Input
                className="input"
                name="name"
                prefix={<UserOutlined />}
                placeholder="Nombre (s)"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="lastName" hasFeedback>
              <Input
                className="input"
                name="lastName"
                prefix={<UserOutlined />}
                placeholder="Apellidos"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="username" hasFeedback>
              <Input
                className="input"
                name="username"
                prefix={<MailOutlined />}
                placeholder="Nombre de usuario"
              />
            </Form.Item>
          </Col>
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
        </Row>
        <Row gutter={[16, 0]}>
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
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="repeatPassword" hasFeedback>
              <Input.Password
                className="input"
                name="repeatPassword"
                prefix={<LockOutlined />}
                placeholder="Repetir contraseña"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <button className="button" type="submit">
                Registrarse
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormRegistro;
