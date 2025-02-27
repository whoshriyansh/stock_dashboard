import React, { useState } from "react";

const SignInPage = () => {
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
  return <div>SignInPage</div>;
};

export default SignInPage;
