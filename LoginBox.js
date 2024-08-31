import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const LoginBox = () => {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <CustomInput label="Email" type="email" />
      <CustomInput label="Password" type="password" />
      <CustomButton label="Login" />
    </div>
  );
};

export default LoginBox;
