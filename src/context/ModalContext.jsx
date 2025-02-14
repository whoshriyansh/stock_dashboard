import React, { createContext, useState, useContext } from "react";
import Modal from "../components/modal/Modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    content: null,
    type: "",
  });

  const openModal = (type, content) => {
    setModal({ isOpen: true, type, content });
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: null, type: "" });
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      <Modal isOpen={modal.isOpen} handleClose={closeModal}>
        {modal.content}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
