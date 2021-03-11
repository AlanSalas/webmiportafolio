import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login as apiLogin } from "../api/auth";
import useAuth from "../hooks/useAuth";
import { Row, Col, Form, Input, Spin, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { emailRules, passwordRules } from "../rules/formRules";

const FormRegistro = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useAuth();

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinish = async () => {
    setLoading(true);

    try {
      const response = await apiLogin(data);
      if (response.status === 200) {
        message.success("Bienvenido.");
        login(response.data.accessToken);
        history.push("/dashboard");
      } else {
        setLoading(false);
        message.error(response.data.err);
      }
    } catch (err) {
      setLoading(false);
      message.error(err);
    }
  };

  return (
    <div className="form-credentials">
      <Form onFinish={handleFinish} noValidate>
        <Row gutter={[16, 0]}>
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
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <Link to="/recuperar-contrasena" className="form-credentials__forgot">
                ¿Olvidaste tu contraseña?
              </Link>
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
                  Iniciar
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
