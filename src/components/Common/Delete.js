import React from "react";
import { Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Delete = ({ setIsVisibleModal, handleDelete, id }) => {
  const handleCancel = () => {
    setIsVisibleModal(false);
  };

  return (
    <div className="delete-item">
      <h1>
        <ExclamationCircleOutlined />
      </h1>
      <div className="delete-item__actions">
        <Button className="delete-item__actions-cancel" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="primary" danger onClick={() => handleDelete(id)}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default Delete;
