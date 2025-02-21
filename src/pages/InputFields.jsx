import React, { useState } from "react";
import {
  Eye,
  EyeSlash,
  CheckCircle,
  ExclamationMark,
  Password,
} from "@phosphor-icons/react";
import { InputField } from "../components/ui/Input";

const InputFields = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    setError(e.target.value.length < 3);
  };

  const handleCharacterCount = (e) => {
    setCharacterCount(e.target.value);
  };

  return (
    <div className="p-4 space-y-6 w-full lg:w-3/4 text-primary-text">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Input Fields UI Components</h1>
        <p className="text-base-content text-secondary-text">
          A collection of some possible input fields with various states and
          styles.
        </p>
      </div>
      {/* Normal Text Input */}
      <div className="bg-card py-6 px-4  rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Confirmation & Warning Modals
          </h3>
          <p className="text-base-content text-sm">
            These modals are used to alert users before taking critical actions,
            such as confirming changes, handling unsaved data, or deleting
            content.
          </p>
        </div>
        <div className="form-control w-full">
          <div className="space-y-1 grid grid-cols-1 md:grid-cols-2 lg:flex gap-2 md:gap-4 items-end">
            <InputField
              type="text"
              placeholder="Enter your name"
              value={text}
              onChange={(e) => setName(e.target.value)}
            />

            <InputField type="number" placeholder="00000000000" />
          </div>
        </div>
      </div>
      {/* Input with Error State and Success State  */}
      <div className="bg-card py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Input with Error & Success States
          </h3>
          <p className="text-base-content text-sm">
            An input field that visually indicates validation status. If the
            input is incorrect, it displays an error state (red border/text). If
            the input is correct, it shows a success state (green border/text).
            Useful for form validation feedback.
          </p>
        </div>
        <div className="form-control w-full flex flex-col  md:flex-row gap-2">
          <div className="w-full md:w-1/2 ">
            <label className="label">
              <span className="label-text text-error">Error Input</span>
            </label>
            <InputField error="true" type="text" placeholder="Error State" />
          </div>
          <div className="w-full md:w-1/2  ">
            <label className="label">
              <span className="label-text text-success">Success Input</span>
            </label>
            <InputField success="true" type="text" placeholder="Error State" />
          </div>
        </div>
      </div>
      {/* Password Input with Toggle */}
      <div className="bg-card py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Password Input with Toggle
          </h3>
          <p className="text-base-content text-sm">
            A secure input field for passwords, with an eye icon button to
            toggle visibility. This helps users check their input while
            maintaining security.
          </p>
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Password Input</span>
          </label>
          <InputField
            type="password"
            placeholder="Enter your Password"
            value={Password}
            onChange={(e) => e.target.value}
          />
        </div>
      </div>
      {/* Input with Icon */}
      {/* <div className="bg-base-300 py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Input with Icon
          </h3>
          <p className="text-base-content text-sm">
            An input field that includes an icon inside, such as a search or
            email symbol. This improves usability by visually indicating the
            input’s purpose.
          </p>
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Input with Icon</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search something..."
              className="input input-bordered w-full pl-10"
            />
            <span className="absolute left-3 top-3 text-gray-500">🔍</span>
          </div>
        </div>
      </div> */}
      {/* Rounded Input */}
      {/* <div className="bg-base-300 py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Rounded Input
          </h3>
          <p className="text-base-content text-sm">
            A text input with fully rounded edges for a modern and sleek design.
            Often used in mobile apps or UI designs with a softer aesthetic.
          </p>
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Input with Icon</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Rounded Input"
              className="input input-bordered w-full rounded-full"
            />
          </div>
        </div>
      </div> */}
      {/* Floating Label Input */}
      {/* <div className="bg-base-300 py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Floating Label Input
          </h3>
          <p className="text-base-content text-sm">
            A stylish input where the placeholder text moves up and becomes a
            floating label when the user starts typing. This enhances
            readability and ensures the label remains visible.
          </p>
        </div>
        <div className="form-control w-full flex flex-row gap-2">
          <div className="relative w-1/2">
            <input
              type="text"
              id="floating"
              className="peer input input-bordered w-full"
              placeholder=" "
            />
            <label
              htmlFor="floating"
              className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm"
            >
              Floating Label
            </label>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Shadow Input"
              className="input input-bordered w-full shadow-lg"
            />
          </div>
        </div>
      </div> */}
      {/* Disabled Input and Read-Only Input */}
      <div className="bg-card py-6 px-4 rounded-xl  space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Disabled & Read-Only Inputs
          </h3>
          <p className="text-base-content text-sm">
            Two input variations: Disabled inputs are grayed out and uneditable,
            used when a field shouldn't be interacted with. Read-only inputs
            allow users to copy the text but prevent modification.
          </p>
        </div>
        <div className="form-control w-full flex flex-col  md:flex-row gap-2">
          <div className="w-full  md:w-1/2">
            <InputField
              type="text"
              placeholder="Enter your name"
              value={text}
              onChange={(e) => setName(e.target.value)}
              disabled="true"
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              type="text"
              placeholder="Read Only Input"
              value={text}
              onChange={(e) => setName(e.target.value)}
              readOnly="true"
            />
          </div>
        </div>
      </div>

      {/* Input with Character Counter */}
      {/* <div className="bg-base-300 py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Character Counter Input
          </h3>
          <p className="text-base-content text-sm">
            An input field that tracks and displays the number of characters
            typed. Useful for inputs with character limits, such as Twitter
            posts or bio sections.
          </p>
        </div>
        <div className="form-control w-full relative">
          <div className="relative w-full">
            <input
              type="text"
              maxLength="20"
              placeholder="Character Counter"
              className="input input-bordered w-full"
              value={characterCount}
              onChange={handleCharacterCount}
            />
            <span className="absolute right-3 bottom-2 text-sm text-gray-500">
              {characterCount.length}/30
            </span>
          </div>
        </div>
      </div> */}
      {/* Animated Input Field */}
      {/* <div className="bg-base-300 py-6 px-4 rounded-xl space-y-3">
        <div className="">
          <h3 className="text-base-content text-2xl font-bold">
            Animated Input Field
          </h3>
          <p className="text-base-content text-sm">
            An input field that dynamically changes its appearance based on
            validation. It provides real-time feedback by turning red for errors
            and green for valid input, enhancing user experience.
          </p>
        </div>
        <div className="form-control w-full relative">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Animated Input</span>
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className={`input input-bordered w-full transition-all duration-300 ${
                error ? "input-error" : "input-success"
              }`}
              value={text}
              onChange={handleChange}
            />
            <span className="text-sm mt-1 flex items-center gap-2">
              {error ? (
                <ExclamationMark size={16} className="text-error" />
              ) : (
                <CheckCircle size={16} className="text-success" />
              )}
              {error ? "Minimum 3 characters required" : "Looks good!"}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InputFields;
