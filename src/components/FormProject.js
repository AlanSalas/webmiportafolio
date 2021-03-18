import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UploadImage from "../components/Common/UploadImage";
import { Row, Col, Form, Input, Spin, message } from "antd";
import { FolderOutlined, LinkOutlined } from "@ant-design/icons";
import { getProjectImage, addProject, updateProject } from "../api/project";
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
  const [form] = Form.useForm();
  const history = useHistory();

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

  const handleReset = () => {
    setFormProject({
      name: "",
      url: "",
      description: "",
    });
    setImage(null);
    form.resetFields();
  };

  const onFinishUpdate = async () => {
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
      history.push("/error/500");
    }
  };

  const onFinishAdd = async () => {
    try {
      setLoading(true);
      if (!image) {
        message.error("Favor de ingresar una imagen relacionada a tu proyecto.");
        setLoading(false);
        return;
      } else {
        const token = localStorage.getItem("token");
        const response = await addProject(image, formProject, token);
        if (response.status === 200) {
          message.success(response.data.message);
          setLoading(false);
          setIsVisibleModal(false);
          setReload(true);
          handleReset();
        }
      }
    } catch (err) {
      setLoading(false);
      history.push("/error/500");
    }
  };

  return (
    <div className="data__form">
      <UploadImage avatar={image} setAvatar={setImage} />
      <Form
        form={form}
        onFinish={project ? onFinishUpdate : onFinishAdd}
        initialValues={initialValues}
        noValidate
      >
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
