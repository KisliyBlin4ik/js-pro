import React, { ChangeEvent, FC } from "react";
import "./style.css";

interface ITextarea {
  label: string;
  placeholder?: string;
  value: string;
  name?: string;
  id?: string;
  cols: number;
  rows: number;
  onChange: (value: string) => void;
}

const Textarea: FC<ITextarea> = ({
  label,
  placeholder,
  value,
  name,
  id,
  cols,
  rows,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Извлеките значение из события и передайте его в функцию onChange
    onChange(e.currentTarget.value);
  };
  
  return (
    <div className="formTeaxtarea">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default Textarea;
