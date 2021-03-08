import React from "react";
import { Row, Col, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const FormReset = () => {
  return (
    <div className="form-credentials">
      <Form noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="password" hasFeedback>
              <Input.Password
                className="input"
                name="password"
                prefix={<LockOutlined />}
                placeholder="Nueva contraseña"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="repeat-password" hasFeedback>
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
