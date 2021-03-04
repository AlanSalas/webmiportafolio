import React from "react";
import { Row, Col, Form, Input, DatePicker } from "antd";
import { BankOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";

const FormExperience = () => {
  return (
    <>
      <Form noValidate>
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="company" hasFeedback>
              <Input
                className="input"
                name="company"
                prefix={<BankOutlined />}
                placeholder="Empresa"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="position" hasFeedback>
              <Input
                className="input"
                name="position"
                prefix={<UserOutlined />}
                placeholder="Puesto"
              />
            </Form.Item>
          </Col>
          <Col span={20} offset={4}>
            <Form.Item name="duration" hasFeedback>
              <DatePicker.RangePicker bordered={false} />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="description" hasFeedback>
              <Input.TextArea
                rows={10}
                className="input area"
                name="description"
                prefix={<BookOutlined />}
                placeholder="Describe aquí tus experiencias"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="description" hasFeedback>
              <button className="button" type="submit">
                Guardar
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormExperience;
