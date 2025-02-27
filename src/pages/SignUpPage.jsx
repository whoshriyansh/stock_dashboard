import React, { useState } from "react";
import { TextInputField } from "../components/form/FormComponent";
import Card from "../components/ui/Card";

const SignUpPage = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!text || !password) {
      setError("Both fields are required");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <div className="w-full h-full md:w-1/2 flex items-center justify-center py-2 px-4">
      <Card>
        <div className="flex flex-col gap-4">
          <TextInputField
            label="Username"
            placeholder="Enter your username"
            value={text}
            onChange={(e) => setText(e.target.value)}
            icon={() => <span className="text-gray-500">👤</span>}
            error={!text && error ? "Username is required" : ""}
          />
          <TextInputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            secureTextEntry={true}
            showEye={true}
            error={!password && error ? "Password is required" : ""}
          />
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
