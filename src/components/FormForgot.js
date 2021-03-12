import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { forgotPassword } from "../api/auth";
import { emailRules } from "../rules/formRules";

const FormForgot = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleFinish = async () => {
    try {
      const response = await forgotPassword(email);
      if (response.status === 200) {
        message.success(response.data.message);
        history.push("/");
      } else {
        message.error(response.data.err);
      }
    } catch (err) {
      history.push("/error/500");
    }
  };

  return (
    <div className="form-credentials">
      <Form onFinish={handleFinish} noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="email" rules={emailRules} hasFeedback>
              <Input
                className="input"
                name="email"
                prefix={<MailOutlined />}
                placeholder="Correo electronico"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <button className="button" type="submit">
                Recuperar
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormForgot;
