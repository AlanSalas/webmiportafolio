import React, { useState } from "react";
import { Redirect } from "react-router";
import Modal from "../components/Common/Modal";
import Fade from "../components/Common/Fade";
import { Space, Table, Tooltip } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import FormProject from "../components/FormProject";
import useAuth from "../hooks/useAuth";

const Projects = () => {
  const { isAuth } = useAuth();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const openModalEdit = data => {
    setIsVisibleModal(true);
    setTitleModal(`Editar ${data.name}`);
    setContentModal(<FormProject />);
  };

  const openModalDelete = data => {
    setIsVisibleModal(true);
    setTitleModal("Delete");
    setContentModal("Delete");
  };

  const dataSource = [
    {
      key: "1",
      name: "Codejobs",
      link: "www.youtube.com",
    },
    {
      key: "2",
      name: "Webmiportafolio",
      link: "www.youtube.com",
    },
    {
      key: "3",
      name: "Movies",
      link: "www.youtube.com",
    },
    {
      key: "4",
      name: "Codejobs",
      link: "www.youtube.com",
    },
    {
      key: "5",
      name: "Codejobs",
      link: "www.youtube.com",
    },
    {
      key: "6",
      name: "Codejobs",
      link: "www.youtube.com",
    },
  ];

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Enlace",
      dataIndex: "link",
      key: "link",
      responsive: ["md"],
    },
    {
      title: "Acciones",
      key: "action",
      render: record => (
        <Space size="middle">
          <Tooltip title="Editar">
            <a className="data__edit" onClick={() => openModalEdit(record)}>
              <EditFilled />
            </a>
          </Tooltip>
          <Tooltip title="Eliminar">
            <a className="data__delete" onClick={() => openModalDelete(record)}>
              <DeleteFilled />
            </a>
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
            dataSource={dataSource}
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
