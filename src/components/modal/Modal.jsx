import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, handleClose, children }) => {
  const mountElement = document.getElementById("overlays");

  useEffect(() => {
    const closeOnEscapeKey = (event) => {
      if (event.key === "Escape") handleClose();
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKey);
  }, [handleClose]);

  if (!isOpen || !mountElement) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-card px-4 py-5 rounded-lg shadow-lg text-base-content relative w-3/4 md:w-2/5 lg:w-1/4 text-primary-text">
        <button
          className="absolute right-2 top-2  text-primary-text rounded"
          onClick={handleClose}
        >
          <X size={26} weight="bold" className="text-base-content" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    mountElement
  );
};

export default Modal;
