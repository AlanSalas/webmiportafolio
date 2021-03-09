import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Input, Spin, message } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { register } from "../api/user";
import {
  nameRules,
  lastNameRules,
  usernameRules,
  emailRules,
  passwordRules,
  repeatPasswordRules,
} from "../rules/formRules";

const FormRegistro = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setData({
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });

    form.resetFields();
  };

  const handleFinish = async () => {
    setLoading(true);

    try {
      const response = await register(data);
      if (response.status === 200) {
        message.success(response.data.message);
        handleReset();
        setLoading(false);
        history.push("/login");
      } else {
        message.error(response.data.err);
        setLoading(false);
      }
    } catch (err) {
      message.error(err);
    }
  };

  return (
    <div className="form-credentials">
      <Form onFinish={handleFinish} noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="name" rules={nameRules} hasFeedback>
              <Input
                className="input"
                name="name"
                prefix={<UserOutlined />}
                placeholder="Nombre (s)"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="lastName" rules={lastNameRules} hasFeedback>
              <Input
                className="input"
                name="lastName"
                prefix={<UserOutlined />}
                placeholder="Apellidos"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="username" rules={usernameRules} hasFeedback>
              <Input
                className="input"
                name="username"
                prefix={<MailOutlined />}
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="email" rules={emailRules} hasFeedback>
              <Input
                className="input"
                name="email"
                prefix={<MailOutlined />}
                placeholder="Correo electronico"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="password" rules={passwordRules} hasFeedback>
              <Input.Password
                className="input"
                name="password"
                prefix={<LockOutlined />}
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="repeatPassword" rules={repeatPasswordRules} hasFeedback>
              <Input.Password
                className="input"
                name="repeatPassword"
                prefix={<LockOutlined />}
                placeholder="Repetir contraseña"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              {loading ? (
                <Spin />
              ) : (
                <button className="button" type="submit">
                  Registrarse
                </button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormRegistro;
