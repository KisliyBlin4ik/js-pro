import React, { FC } from "react";
import "./style.css";

interface IInput {
  type: "password" | "text";
  placeholder: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const Input: FC<IInput> = ({ type, placeholder, value, label, onChange }) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
// Dispatch<SetStateAction<string>>
