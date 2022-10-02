import React from 'react';
import "./btn.scss";

export const BtnPrimary = ({ text }) => {
  return (
    <div>
      <button className="btn-primary">{text}</button>
    </div>
  );
};

export const BtnOutline = ({ text, ...rest }) => {
  return (
    <div>
      <button className="btn-outline" {...rest}>{text}</button>
    </div>
  );
};