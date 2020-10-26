import React from "react";
import "./radio.scss";

const Radio = ({ name, value, label, onChange }) => {
  return (
    <label className='label-radio'>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
