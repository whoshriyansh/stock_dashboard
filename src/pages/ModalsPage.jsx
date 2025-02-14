// src/pages/Modals.jsx
import React from "react";
import { useModal } from "../context/ModalContext";
import {
  ConfirmationModal,
  UnsaveChangesModal,
  DeletePostModal,
  RequestAccessModal,
  InviteCollaboratorsModal,
  AddedToGroupModal,
  SignupLoginModal,
} from "../components/modal/AllModals";

const Modals = () => {
  const { openModal } = useModal();

  return (
    <div className="p-4 space-y-10 w-full lg:w-1/2">
      <div>
        <h1 className="text-5xl font-bold"> Modal Showcase</h1>
        <p className=" text-base-content">
          Click on any button below to preview different types of modals in
          action. These modals serve various purposes, from confirmations to
          user interactions.
        </p>
      </div>

      <div className="bg-base-200 py-6 px-4 rounded-xl">
        <div>
          <h3>Confirmation & Warning Modals</h3>
          <p>
            These modals are used to alert users before taking critical actions,
            such as confirming changes, handling unsaved data, or deleting
            content.
          </p>
        </div>
        <div className="py-10 px-10 bg-base-300 flex gap-5 items-center justify-center rounded-md mt-5">
          <button
            className="btn btn-primary btn-sm font-normal"
            onClick={() =>
              openModal(
                "confirmation",
                <ConfirmationModal openModal={openModal} />
              )
            }
          >
            Confirmation Modal
          </button>
          <button
            className="btn btn-warning btn-sm font-normal"
            onClick={() =>
              openModal(
                "unsavedChanges",
                <UnsaveChangesModal openModal={openModal} />
              )
            }
          >
            Unsaved Changes
          </button>

          <button
            className="btn btn-error btn-sm font-normal"
            onClick={() =>
              openModal("deletePost", <DeletePostModal openModal={openModal} />)
            }
          >
            Delete Post
          </button>
        </div>
      </div>

      <div className="bg-base-200 py-6 px-4 rounded-xl">
        <div>
          <h3>Access & Collaboration Modals</h3>
          <p>
            These modals facilitate user interactions such as requesting access,
            inviting collaborators, or notifying users about group additions.
          </p>
        </div>
        <div className="py-10 px-10 bg-base-300 flex gap-5 items-center justify-center rounded-md  mt-5">
          <button
            className="btn btn-primary  btn-sm font-normal"
            onClick={() =>
              openModal(
                "requestAccess",
                <RequestAccessModal openModal={openModal} />
              )
            }
          >
            Request Access
          </button>

          <button
            className="btn btn-info  btn-sm font-normal"
            onClick={() =>
              openModal(
                "inviteCollaborators",
                <InviteCollaboratorsModal openModal={openModal} />
              )
            }
          >
            Invite Collaborators
          </button>

          <button
            className="btn btn-success btn-sm font-normal"
            onClick={() =>
              openModal(
                "addedToGroup",
                <AddedToGroupModal openModal={openModal} />
              )
            }
          >
            Added to Group
          </button>
        </div>
      </div>

      <div className="bg-base-200 py-6 px-4 rounded-xl">
        <div>
          <h3>Authentication Modal</h3>
          <p>
            This modal helps users sign up or log in to access the platform. It
            is essential for user authentication and account management.
          </p>
        </div>
        <div className="py-10 px-10 bg-base-300 flex gap-5 items-center justify-center rounded-md  mt-5">
          <button
            className="btn btn-accent btn-sm font-normal"
            onClick={() =>
              openModal(
                "signupLogin",
                <SignupLoginModal openModal={openModal} />
              )
            }
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
