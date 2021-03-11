import React, { useState } from "react";
import { Redirect } from "react-router";
import Modal from "../components/Common/Modal";
import FormExperience from "../components/FormExperience";
import Fade from "../components/Common/Fade";
import { Space, Table, Tooltip } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import useAuth from "../hooks/useAuth";

const Experiencies = () => {
  const { isAuth } = useAuth();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const openModalEdit = data => {
    setIsVisibleModal(true);
    setTitleModal(`Editar ${data.company}`);
    setContentModal(<FormExperience key={data.key} />);
  };

  const openModalDelete = data => {
    setIsVisibleModal(true);
    setTitleModal("Delete");
    setContentModal("Delete");
  };

  const dataSource = [
    {
      key: "1",
      company: "Genotipo",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "2",
      company: "LearnAla",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "3",
      company: "Genotipo",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "4",
      company: "Genotipo",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "5",
      company: "Genotipo",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "6",
      company: "Genotipo",
      position: "Web Developer",
      duration: "4 meses",
    },
    {
      key: "7",
      company: "Genotipo",
      position: "Web Developer Senior Admin Empresas",
      duration: "4 meses",
    },
  ];

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
