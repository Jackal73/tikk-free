import React from 'react';
import "./style.scss";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};