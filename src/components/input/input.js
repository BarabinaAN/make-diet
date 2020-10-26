import React from "react";
import "./input.scss";

const Input = ({ name, value, label, onChange }) => {
  return (
    <label className='label-input'>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Input;
