import React from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";

const mountElement = document.getElementById("overlays");

const Overlays = ({
  isOpen,
  closeModal,
  title,
  onConfirm,
  confirmText = "Confirm",
  confirmColor = "btn-primary",
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-base-100 p-6 rounded-xl shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-error"
        >
          <Icon icon="mdi:close" className="text-lg" />
        </button>

        {/* Modal Header */}
        {title && (
          <h3 className="text-lg font-semibold text-primary-content mb-4">
            {title}
          </h3>
        )}

        {/* Modal Body */}
        <div className="text-base-content mb-6">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-outline btn-secondary"
          >
            Cancel
          </button>
          <button onClick={onConfirm} className={`btn btn-sm ${confirmColor}`}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    mountElement
  );
};

export default Overlays;
