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
import { Button } from "../components/ui/Buttons";

const Modals = () => {
  const { openModal } = useModal();

  return (
    <div className="px-2 md:px-4 py-4 md:py-2 space-y-10 w-full lg:w-1/2 bg-background text-primary-text">
      <div>
        <h1 className="text-5xl font-bold"> Modal Showcase</h1>
        <p className=" text-base-content">
          Click on any Button below to preview different types of modals in
          action. These modals serve various purposes, from confirmations to
          user interactions.
        </p>
      </div>

      <div className="bg-card py-6 px-4 rounded-xl">
        <div>
          <h3>Confirmation & Warning Modals</h3>
          <p>
            These modals are used to alert users before taking critical actions,
            such as confirming changes, handling unsaved data, or deleting
            content.
          </p>
        </div>
        <div className="md:p-10 bg-base-300 flex gap-5 items-center justify-center rounded-md mt-5">
          <Button
            variant="pur_border"
            className="btn btn-primary btn-sm font-normal"
            onClick={() =>
              openModal(
                "confirmation",
                <ConfirmationModal openModal={openModal} />
              )
            }
          >
            Confirmation Modal
          </Button>
          <Button
            variant="warning"
            onClick={() =>
              openModal(
                "unsavedChanges",
                <UnsaveChangesModal openModal={openModal} />
              )
            }
          >
            Unsaved Changes
          </Button>

          <Button
            variant="error"
            className="btn btn-error btn-sm font-normal"
            onClick={() =>
              openModal("deletePost", <DeletePostModal openModal={openModal} />)
            }
          >
            Delete Post
          </Button>
        </div>
      </div>

      <div className="bg-card py-6 px-4 rounded-xl">
        <div>
          <h3>Access & Collaboration Modals</h3>
          <p>
            These modals facilitate user interactions such as requesting access,
            inviting collaborators, or notifying users about group additions.
          </p>
        </div>
        <div className="md:p-10 flex gap-5 items-center justify-center rounded-md  mt-5">
          <Button
            variant="purple"
            onClick={() =>
              openModal(
                "requestAccess",
                <RequestAccessModal openModal={openModal} />
              )
            }
          >
            Request Access
          </Button>

          <Button
            variant="purple"
            onClick={() =>
              openModal(
                "inviteCollaborators",
                <InviteCollaboratorsModal openModal={openModal} />
              )
            }
          >
            Invite Collaborators
          </Button>

          <Button
            variant="purple"
            onClick={() =>
              openModal(
                "addedToGroup",
                <AddedToGroupModal openModal={openModal} />
              )
            }
          >
            Added to Group
          </Button>
        </div>
      </div>

      <div className="bg-card py-6 px-4 rounded-xl">
        <div>
          <h3>Authentication Modal</h3>
          <p>
            This modal helps users sign up or log in to access the platform. It
            is essential for user authentication and account management.
          </p>
        </div>
        <div className="py-10 px-10 bg-base-300 flex gap-5 items-center justify-center rounded-md  mt-5">
          <Button
            variant="pur_text"
            onClick={() =>
              openModal(
                "signupLogin",
                <SignupLoginModal openModal={openModal} />
              )
            }
          >
            Signup Modal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
