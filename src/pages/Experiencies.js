import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import Modal from "../components/Common/Modal";
import FormExperience from "../components/FormExperience";
import Fade from "../components/Common/Fade";
import Delete from "../components/Common/Delete";
import { Space, Table, message } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import useAuth from "../hooks/useAuth";
import moment from "moment";
import { getExperiences, deleteExperience } from "../api/experience";

const Experiencies = ({ reload, setReload }) => {
  const { isAuth } = useAuth();
  const [userId] = useState(localStorage.getItem("userId"));
  const [data, setData] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const dateFormat = "DD/MM/YYYY";
  const history = useHistory();

  const openModalAdd = () => {
    setIsVisibleModal(true);
    setTitleModal("Nueva Experiencia");
    setContentModal(
      <FormExperience
        setIsVisibleModal={setIsVisibleModal}
        setReload={setReload}
        dateFormat={dateFormat}
      />
    );
  };

  const openModalEdit = experience => {
    setIsVisibleModal(true);
    setTitleModal(`Editar ${experience.company}`);
    setContentModal(
      <FormExperience
        key={experience.key}
        experience={experience}
        setIsVisibleModal={setIsVisibleModal}
        setReload={setReload}
        dateFormat={dateFormat}
      />
    );
  };

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteExperience(token, id);
      message.success(response.data.message);
      setIsVisibleModal(false);
      setReload(true);
    } catch (err) {
      history.push("/error/500");
    }
  };

  const openModalDelete = experience => {
    setIsVisibleModal(true);
    setTitleModal(`Eliminar ${experience.company}`);
    setContentModal(
      <Delete
        setIsVisibleModal={setIsVisibleModal}
        handleDelete={handleDelete}
        id={experience.key}
      />
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getExperiences(userId);
        const experiences = response.data.experiences.map(experience => {
          return {
            key: experience._id,
            company: experience.company,
            position: experience.position,
            startDate: experience.startDate,
            finishDate: experience.finishDate,
            description: experience.description,
            duration: moment(experience.startDate, dateFormat)
              .from(moment(experience.finishDate, dateFormat))
              .split("hace"),
          };
        });
        setData(experiences);
      } catch (err) {
        console.log(err.message);
        history.push("/error/500");
      }
    };
    getData();
    setReload(false);
  }, [reload, setReload, userId, history]);

  const columns = [
    {
      title: "Empresa",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Puesto",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Duración",
      dataIndex: "duration",
      key: "duration",
      responsive: ["md"],
    },
    {
      title: "Acciones",
      key: "action",
      render: record => (
        <Space size="middle">
          <button className="btn edit" onClick={() => openModalEdit(record)}>
            <EditFilled />
          </button>
          <button className="btn delete" onClick={() => openModalDelete(record)}>
            <DeleteFilled />
          </button>
        </Space>
      ),
    },
  ];

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Fade>
      <div className="data">
        <div className="container">
          <div className="data__add">
            <button className="button green" onClick={openModalAdd}>
              Nuevo
            </button>
          </div>
          <Table
            dataSource={data}
            columns={columns}
            pagination={{ defaultCurrent: 1, defaultPageSize: 5 }}
          />
          <Modal
            title={titleModal}
            isVisibleModal={isVisibleModal}
            setIsVisibleModal={setIsVisibleModal}
          >
            {contentModal}
          </Modal>
        </div>
      </div>
    </Fade>
  );
};

export default Experiencies;
