import React from 'react';

const CustomInput = ({ label, type }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" />
    </div>
  );
};

export default CustomInput;