import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Input, DatePicker, Spin, message } from "antd";
import { BankOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/es";
import locale from "antd/es/date-picker/locale/es_ES";
import { addExperience, updateExperience } from "../api/experience";
import { companyRules, positionRules, dateRules, descriptionRules } from "../rules/formRules";

const FormExperience = ({ experience, setIsVisibleModal, setReload, dateFormat }) => {
  const [loading, setLoading] = useState(false);
  const [formExperience, setFormExperience] = useState(
    experience
      ? experience
      : {
          company: "",
          position: "",
          startDate: "",
          finishDate: "",
          description: "",
        }
  );
  const [form] = Form.useForm();
  const history = useHistory();

  const initialValues = {
    company: formExperience.company,
    position: formExperience.position,
    datePicker: experience
      ? [
          moment(formExperience.startDate, dateFormat),
          moment(formExperience.finishDate, dateFormat),
        ]
      : "",
    description: formExperience.description,
  };

  const handleChange = e => {
    setFormExperience({
      ...formExperience,
      [e.target.name]: e.target.value,
    });
  };

  const onDateSelection = (value, dateString) => {
    setFormExperience({
      ...formExperience,
      startDate: dateString[0],
      finishDate: dateString[1],
    });
  };

  const handleReset = () => {
    setFormExperience({
      company: "",
      position: "",
      startDate: null,
      finishDate: null,
      description: "",
    });
    form.resetFields();
  };

  const onFinishUpdate = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await updateExperience(formExperience, token);
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
      const token = localStorage.getItem("token");
      const response = await addExperience(formExperience, token);
      if (response.status === 200) {
        message.success(response.data.message);
        setLoading(false);
        setIsVisibleModal(false);
        setReload(true);
        handleReset();
      }
    } catch (err) {
      setLoading(false);
      history.push("/error/500");
    }
  };

  return (
    <div className="data__form">
      <Form
        form={form}
        onFinish={experience ? onFinishUpdate : onFinishAdd}
        initialValues={initialValues}
        noValidate
      >
        <Row>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="company" rules={companyRules} hasFeedback>
              <Input
                className="input"
                name="company"
                prefix={<BankOutlined />}
                placeholder="Empresa"
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
            <Form.Item name="datePicker" rules={dateRules} hasFeedback>
              <DatePicker.RangePicker
                name="datePicker"
                bordered={false}
                locale={locale}
                format={dateFormat}
                onChange={onDateSelection}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Form.Item name="description" rules={descriptionRules} hasFeedback>
              <Input.TextArea
                rows={10}
                maxLength={351}
                className="input area"
                name="description"
                prefix={<BookOutlined />}
                placeholder="Describe aquí tus experiencias"
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

export default FormExperience;
