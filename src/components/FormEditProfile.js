import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UploadImage from "../components/Common/UploadImage";
import { Row, Col, Form, Input, Spin, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getProfileImage, updateUser } from "../api/user";
import {
  nameRules,
  lastNameRules,
  usernameSocialRules,
  positionRules,
  youtubeChannelRules,
  descriptionRules,
} from "../rules/formRules";

const FormEditProfile = ({ userData, setReload, setIsVisibleModal }) => {
  const [form, setForm] = useState(userData);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getUserImg = async () => {
      try {
        const response = await getProfileImage("users", form.avatar);
        setAvatar(response.request.responseURL);
      } catch (err) {
        history.push("/error/500");
      }
    };

    form.avatar ? getUserImg() : setAvatar(null);
  }, [form.avatar, history]);

  const initialValues = {
    name: form.name,
    lastName: form.lastName,
    position: form.position,
    facebook: form.facebook,
    twitter: form.twitter,
    instagram: form.instagram,
    linkedin: form.linkedin,
    youtube: form.youtube,
    about: form.about,
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await updateUser(avatar, form, token);
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

  return (
    <div className="profile__form">
      <UploadImage className="upload-image" avatar={avatar} setAvatar={setAvatar} />
      <Form onFinish={onFinish} initialValues={initialValues} noValidate>
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="name" rules={nameRules} hasFeedback>
              <Input
                className="input"
                name="name"
                prefix={<UserOutlined />}
                placeholder="Nombre"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
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
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="position" rules={positionRules} hasFeedback>
              <Input
                className="input"
                name="position"
                prefix={<UserOutlined />}
                placeholder="Puesto"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="facebook" rules={usernameSocialRules} hasFeedback>
              <Input
                name="facebook"
                placeholder="Username"
                addonBefore="facebook.com/"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="twitter" rules={usernameSocialRules} hasFeedback>
              <Input
                name="twitter"
                placeholder="Username"
                addonBefore="twitter.com/"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="instagram" rules={usernameSocialRules} hasFeedback>
              <Input
                name="instagram"
                placeholder="Username"
                addonBefore="instagram.com/"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="linkedin" rules={usernameSocialRules} hasFeedback>
              <Input
                name="linkedin"
                placeholder="Username"
                addonBefore="linkedin.com/in/"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="youtube" rules={youtubeChannelRules} hasFeedback>
              <Input
                name="youtube"
                placeholder="Id de tu canal"
                addonBefore="youtube.com/channel/"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="about" rules={descriptionRules} hasFeedback>
              <Input.TextArea
                rows={10}
                maxLength={351}
                className="input area"
                name="about"
                placeholder="Acerca de tí"
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
                  Editar
                </button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormEditProfile;
