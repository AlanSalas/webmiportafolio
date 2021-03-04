import React from "react";
import { Modal as ModalAntd } from "antd";

const Modal = ({ children, title, isVisibleModal, setIsVisibleModal }) => {
  return (
    <ModalAntd
      title={title}
      visible={isVisibleModal}
      onCancel={() => {
        setIsVisibleModal(false);
      }}
      footer={false}
      centered
    >
      {children}
    </ModalAntd>
  );
};

export default Modal;
