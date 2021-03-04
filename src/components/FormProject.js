import React from "react";
import { Row, Col, Form, Input } from "antd";
import { FolderOutlined, LinkOutlined } from "@ant-design/icons";

const FormProject = () => {
  return (
    <>
      <Form noValidate>
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="name" hasFeedback>
              <Input
                className="input"
                name="name"
                prefix={<FolderOutlined />}
                placeholder="Nombre"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="link" hasFeedback>
              <Input className="input" name="link" prefix={<LinkOutlined />} placeholder="Enlace" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="description" hasFeedback>
              <Input.TextArea
                rows={5}
                className="input area"
                name="description"
                placeholder="Describe tu proyecto"
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

export default FormProject;
