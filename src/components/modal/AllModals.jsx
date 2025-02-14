import {
  Check,
  X,
  WarningCircle,
  Trash,
  Key,
  UsersThree,
  UserCheck,
  GoogleLogo,
  CreditCard,
  ShieldCheck,
  Crown,
} from "@phosphor-icons/react";
import React from "react";

export const ConfirmationModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-success text-success-content p-2 rounded-full">
      <Check size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Blog post published</h2>
    <p className="text-base-content mt-2">
      This blog post has been published. Team members will be able to edit this
      post and republish changes.
    </p>
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-primary w-1/2">Confirm</button>
    </div>
  </div>
);

export const UnsaveChangesModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-warning text-warning-content p-2 rounded-full">
      <WarningCircle size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Unsaved Changes</h2>
    <p className="text-base-content mt-2">
      You have unsaved changes. If you leave now, your changes will be lost.
    </p>
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-warning w-1/2">Leave</button>
    </div>
  </div>
);

export const DeletePostModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-error text-error-content p-2 rounded-full">
      <Trash size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Delete Post</h2>
    <p className="text-base-content mt-2">
      Are you sure you want to delete this post? This action cannot be undone.
    </p>
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-error w-1/2">Delete</button>
    </div>
  </div>
);

export const RequestAccessModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-primary text-primary-content p-2 rounded-full">
      <Key size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Request Access</h2>
    <p className="text-base-content mt-2">
      You need permission to access this resource. Send a request to gain
      access.
    </p>
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-primary w-1/2">Request</button>
    </div>
  </div>
);

export const InviteCollaboratorsModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-info text-info-content p-2 rounded-full">
      <UsersThree size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Invite Collaborators</h2>
    <p className="text-base-content mt-2">
      Enter the email addresses of collaborators to invite them to this project.
    </p>
    <input
      type="email"
      placeholder="Enter email addresses"
      className="w-full mt-2 p-2 border rounded input input-bordered"
    />
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-info w-1/2">Send Invite</button>
    </div>
  </div>
);

export const AddedToGroupModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-success text-success-content p-2 rounded-full">
      <UserCheck size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">You Have Been Added!</h2>
    <p className="text-base-content mt-2">
      You have successfully been added to the group. Start collaborating now.
    </p>
    <button
      className="mt-6 btn btn-success w-full"
      onClick={() => openModal("", null)}
    >
      Got It
    </button>
  </div>
);

export const SignupLoginModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <h2 className="text-xl font-bold">Welcome</h2>
    <p className="text-base-content mt-2">Sign up or log in to continue.</p>
    <input
      type="text"
      placeholder="Enter your name"
      className="input input-bordered w-full mt-4"
    />
    <input
      type="email"
      placeholder="Enter your email"
      className="input input-bordered w-full mt-2"
    />
    <input
      type="password"
      placeholder="Enter your password"
      className="input input-bordered w-full mt-2"
    />
    <div className="mt-6 flex flex-col w-full gap-2">
      <button className="btn btn-primary w-full">Continue</button>
      <button className="btn btn-outline w-full flex gap-2 justify-center items-center">
        <GoogleLogo size={20} /> Continue with Google
      </button>
    </div>
    <button
      className="mt-6 text-sm text-gray-500"
      onClick={() => openModal("", null)}
    >
      Cancel
    </button>
  </div>
);

export const LoginModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <h2 className="text-xl font-bold">Login</h2>
    <p className="text-base-content mt-2">Enter your credentials to log in.</p>
    <input
      type="email"
      placeholder="Email"
      className="input input-bordered w-full mt-4"
    />
    <input
      type="password"
      placeholder="Password"
      className="input input-bordered w-full mt-2"
    />
    <div className="mt-6 flex flex-col w-full gap-2">
      <button className="btn btn-primary w-full">Login</button>
      <button
        className="btn btn-outline w-full"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
    </div>
  </div>
);

// Google Login Modal
export const GoogleLoginModal = ({ openModal }) => (
  <div className="flex flex-col items-center w-full text-center">
    <h2 className="text-xl font-bold">Continue with Google</h2>
    <button className="btn btn-outline w-full flex gap-2 justify-center items-center mt-6">
      <GoogleLogo size={20} /> Sign in with Google
    </button>
    <button
      className="mt-6 text-sm text-gray-500"
      onClick={() => openModal("", null)}
    >
      Cancel
    </button>
  </div>
);

// Enter OTP Modal
export const OtpModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <h2 className="text-xl font-bold">Enter OTP</h2>
    <p className="text-base-content mt-2">
      We sent a 6-digit code to your phone.
    </p>
    <input
      type="text"
      maxLength="6"
      placeholder="••••••"
      className="input input-bordered w-full mt-4 text-center text-2xl"
    />
    <div className="mt-6 flex justify-between w-full gap-2">
      <button
        className="btn btn-outline w-1/2"
        onClick={() => openModal("", null)}
      >
        Cancel
      </button>
      <button className="btn btn-primary w-1/2">Verify</button>
    </div>
  </div>
);

// Credit Card Details Modal
export const CreditCardModal = ({ openModal }) => (
  <div className="flex flex-col items-start w-full">
    <div className="bg-primary text-primary-content p-2 rounded-full">
      <CreditCard size={26} weight="bold" />
    </div>
    <h2 className="text-xl font-bold mt-4">Enter Payment Details</h2>
    <input
      type="text"
      placeholder="Card Number"
      className="input input-bordered w-full mt-4"
    />
    <div className="flex gap-2 w-full mt-2">
      <input
        type="text"
        placeholder="MM/YY"
        className="input input-bordered w-1/2"
      />
      <input
        type="text"
        placeholder="CVV"
        className="input input-bordered w-1/2"
      />
    </div>
    <button className="btn btn-primary w-full mt-6">Pay Now</button>
    <button
      className="mt-6 text-sm text-gray-500"
      onClick={() => openModal("", null)}
    >
      Cancel
    </button>
  </div>
);

// Select Plan Modal
export const SelectPlanModal = ({ openModal }) => (
  <div className="flex flex-col w-full">
    <h2 className="text-xl font-bold">Choose Your Plan</h2>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 border rounded-lg text-center">
        <ShieldCheck size={32} className="mx-auto text-primary" />
        <h3 className="text-lg font-bold mt-2">Basic</h3>
        <p className="text-sm mt-1">$10 / month</p>
        <button className="btn btn-primary w-full mt-4">Select</button>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <Crown size={32} className="mx-auto text-warning" />
        <h3 className="text-lg font-bold mt-2">Pro</h3>
        <p className="text-sm mt-1">$20 / month</p>
        <button className="btn btn-warning w-full mt-4">Select</button>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <ShieldCheck size={32} className="mx-auto text-success" />
        <h3 className="text-lg font-bold mt-2">Enterprise</h3>
        <p className="text-sm mt-1">$50 / month</p>
        <button className="btn btn-success w-full mt-4">Select</button>
      </div>
    </div>
    <button
      className="mt-6 text-sm text-gray-500"
      onClick={() => openModal("", null)}
    >
      Cancel
    </button>
  </div>
);
