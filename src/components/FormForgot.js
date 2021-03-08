import React from "react";
import { Row, Col, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const FormForgot = () => {
  return (
    <div className="form-credentials">
      <Form noValidate>
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
