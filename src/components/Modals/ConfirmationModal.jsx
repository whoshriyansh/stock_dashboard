import React, { useState } from "react";
import Overlays from "../Overlays";

const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open Modal Button */}
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Open Confirmation Modal
      </button>

      {/* Modal */}
      <Overlays
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        onConfirm={() => {
          console.log("Confirmed!");
          setIsOpen(false);
        }}
        title="Confirmation Required"
        confirmText="Yes, Confirm"
        confirmColor="btn-success" // Change this to btn-warning, btn-error, etc.
      >
        <p>Are you sure you want to proceed?</p>
      </Overlays>
    </div>
  );
};

export default ConfirmationModal;
