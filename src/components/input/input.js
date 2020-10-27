import React from "react";
import "./input.scss";

const Input = ({ name, value, label, onChange, error}) => {
  const inputClass = error ? 'label-input is-invalid' : 'label-input'
  const invalid = error ? <span className='error'>{error}</span> : null
  
  return (
    <label className={inputClass}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
      {invalid}
    </label>
  );
};

export default Input;
