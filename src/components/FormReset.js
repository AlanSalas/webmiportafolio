import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { updatePassword } from "../api/auth";
import { passwordRules, repeatPasswordRules } from "../rules/formRules";

const FormReset = ({ token }) => {
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFinish = async () => {
    try {
      const response = await updatePassword(password, token);
      if (response.status !== 200) {
        return message.error(response.data.err);
      }
      message.success(response.data.message);
      history.push("/login");
    } catch (err) {
      history.push("/error/500");
    }
  };

  return (
    <div className="form-credentials">
      <Form onFinish={handleFinish} noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="password" rules={passwordRules} hasFeedback>
              <Input.Password
                className="input"
                name="password"
                prefix={<LockOutlined />}
                placeholder="Nueva contraseña"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="repeat-password" rules={repeatPasswordRules} hasFeedback>
              <Input.Password
                className="input"
                name="repeat-password"
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
                Reestablecer
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormReset;
