import React, { useState, useEffect } from "react";
import UploadImage from "../components/Common/UploadImage";
import { Row, Col, Form, Input, Spin, message } from "antd";
import { FolderOutlined, LinkOutlined } from "@ant-design/icons";
import { getProjectImage, updateProject } from "../api/project";
import { nameProjectRules, urlRules, descriptionRules } from "../rules/formRules";

const FormProject = ({ project, setIsVisibleModal, setReload }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [formProject, setFormProject] = useState(
    project
      ? project
      : {
          name: "",
          url: "",
          description: "",
        }
  );

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await getProjectImage("projects", formProject.image);
        setImage(response.request.responseURL);
      } catch (err) {
        console.log(err);
      }
    };

    formProject.image ? getImage() : setImage(null);
  }, [formProject.image]);

  const initialValues = { ...formProject };

  const handleChange = e => {
    setFormProject({
      ...formProject,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await updateProject(image, formProject, token);
      if (response.status === 200) {
        message.success(response.data.message);
        setLoading(false);
        setIsVisibleModal(false);
        setReload(true);
      }
    } catch (err) {
      setLoading(false);
      // history.push("/error/500");
    }
  };

  return (
    <div className="data__form">
      <UploadImage avatar={image} setAvatar={setImage} />
      <Form onFinish={onFinish} initialValues={initialValues} noValidate>
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="name" rules={nameProjectRules} hasFeedback>
              <Input
                className="input"
                name="name"
                prefix={<FolderOutlined />}
                placeholder="Nombre"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="url" rules={urlRules} hasFeedback>
              <Input
                className="input"
                name="url"
                prefix={<LinkOutlined />}
                placeholder="Enlace"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="description" rules={descriptionRules} hasFeedback>
              <Input.TextArea
                rows={5}
                maxLength={351}
                className="input area"
                name="description"
                placeholder="Describe tu proyecto"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item>
              {loading ? (
                <Spin />
              ) : (
                <button className="button" type="submit">
                  Guardar
                </button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormProject;
