import React, { useState } from "react";
import Overlays from "../components/Overlays";

const Modals = () => {
  const [modalType, setModalType] = useState(null);

  // Close modal function
  const closeModal = () => setModalType(null);

  // Modal content mapping based on type
  const modalDetails = {
    confirmation: {
      title: "Are you sure?",
      content: "This action cannot be undone.",
      confirmText: "Confirm",
      confirmColor: "btn-success",
    },
    warning: {
      title: "Warning!",
      content: "This might have unintended consequences.",
      confirmText: "Proceed",
      confirmColor: "btn-warning",
    },
    error: {
      title: "Error!",
      content: "Something went wrong. Try again later.",
      confirmText: "Retry",
      confirmColor: "btn-error",
    },
    info: {
      title: "Information",
      content: "This is an informational message.",
      confirmText: "Okay",
      confirmColor: "btn-info",
    },
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Modal Showcase</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setModalType("confirmation")}
          className="btn btn-primary"
        >
          Open Confirmation Modal
        </button>
        <button
          onClick={() => setModalType("warning")}
          className="btn btn-warning"
        >
          Open Warning Modal
        </button>
        <button onClick={() => setModalType("error")} className="btn btn-error">
          Open Error Modal
        </button>
        <button onClick={() => setModalType("info")} className="btn btn-info">
          Open Info Modal
        </button>
      </div>

      {/* Render Overlay Modal if a type is selected */}
      {modalType && (
        <Overlays
          isOpen={!!modalType}
          closeModal={closeModal}
          title={modalDetails[modalType].title}
          onConfirm={closeModal}
          confirmText={modalDetails[modalType].confirmText}
          confirmColor={modalDetails[modalType].confirmColor}
        >
          <p>{modalDetails[modalType].content}</p>
        </Overlays>
      )}
    </div>
  );
};

export default Modals;
