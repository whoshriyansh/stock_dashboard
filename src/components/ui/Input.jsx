import React, { useState } from "react";
import {
  Eye,
  EyeSlash,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";

export const InputField = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  icon,
  className = "",
  disabled = false,
  readOnly = false,
  maxLength,
  error = false,
  success = false,
  countryCode = "",
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputType = type === "password" && passwordVisible ? "text" : type;

  return (
    <div className="relative w-full">
      {/* Country Code Dropdown for Number Input */}
      {type === "number" && countryCode && (
        <select className="absolute left-3 top-3 bg-transparent border-primary-yellow outline-none">
          <option>+91</option>
          <option>+1</option>
          <option>+44</option>
        </select>
      )}

      {icon && !countryCode && (
        <span className="absolute left-3 top-3 text-gray-500">{icon}</span>
      )}

      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border px-3 rounded-lg bg-background border-[#8957FF]/30 py-3 text-xs md:text-sm w-full ${className} 
          ${icon ? "pl-10" : ""} 
          ${countryCode ? "pl-16" : ""} 
          ${error ? "border-red-500" : ""} 
          ${success ? "border-green-500" : ""}`}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
      />

      {/* Password Toggle Icon */}
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-3"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      )}

      {/* Error and Success Indicators */}
      {error && (
        <WarningCircle
          size={20}
          className="absolute right-3 top-3 text-red-500"
        />
      )}
      {success && (
        <CheckCircle
          size={20}
          className="absolute right-3 top-3 text-green-500"
        />
      )}
    </div>
  );
};
