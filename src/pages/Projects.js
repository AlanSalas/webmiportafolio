import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Modal from "../components/Common/Modal";
import Fade from "../components/Common/Fade";
import { message, Space, Table, Tooltip } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import FormProject from "../components/FormProject";
import Delete from "../components/Common/Delete";
import useAuth from "../hooks/useAuth";
import { getProjects, deleteProject } from "../api/project";

const Projects = () => {
  const { isAuth } = useAuth();
  const [userId] = useState(localStorage.getItem("userId"));
  const [data, setData] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const [reload, setReload] = useState(false);

  const openModalEdit = project => {
    setIsVisibleModal(true);
    setTitleModal(`Editar ${project.name}`);
    setContentModal(
      <FormProject
        key={project.key}
        project={project}
        setIsVisibleModal={setIsVisibleModal}
        setReload={setReload}
      />
    );
  };

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteProject(token, id);
      message.success(response.data.message);
      setIsVisibleModal(false);
      setReload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const openModalDelete = project => {
    setIsVisibleModal(true);
    setTitleModal(`Eliminar ${project.name}`);
    setContentModal(
      <Delete setIsVisibleModal={setIsVisibleModal} handleDelete={handleDelete} id={project.key} />
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProjects(userId);
        const projects = response.data.projects.map(project => {
          return {
            key: project._id,
            name: project.name,
            url: project.url,
            description: project.description,
            image: project.image,
          };
        });
        setData(projects);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    setReload(false);
  }, [reload, userId]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Enlace",
      dataIndex: "url",
      key: "url",
      responsive: ["md"],
    },
    {
      title: "Acciones",
      key: "action",
      render: record => (
        <Space size="middle">
          <Tooltip title="Editar">
            <button className="btn edit" onClick={() => openModalEdit(record)}>
              <EditFilled />
            </button>
          </Tooltip>
          <Tooltip title="Eliminar">
            <button className="btn delete" onClick={() => openModalDelete(record)}>
              <DeleteFilled />
            </button>
          </Tooltip>
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
          <Table
            dataSource={data}
            columns={columns}
            pagination={{ defaultCurrent: 1, defaultPageSize: 5 }}
          />
        </div>
        <Modal
          title={titleModal}
          isVisibleModal={isVisibleModal}
          setIsVisibleModal={setIsVisibleModal}
        >
          {contentModal}
        </Modal>
      </div>
    </Fade>
  );
};

export default Projects;
