import { Eye, EyeSlash, WarningCircle } from "@phosphor-icons/react";
import React, { useState } from "react";

export const TextInputField = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  secureTextEntry = false,
  required = false,
  showEye = false,
  icon: Icon,
}) => {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border px-3 rounded-lg py-2 text-sm w-full ${
            Icon ? "pl-10" : ""
          } ${error ? "border-red-500" : "border-gray-300"}`}
        />
        {showEye && (
          <button
            type="button"
            className="absolute right-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="flex items-center text-xs text-red-500 mt-1">
          <WarningCircle size={14} className="mr-1" /> {error}
        </p>
      )}
    </div>
  );
};
