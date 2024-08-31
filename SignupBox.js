import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const SignupBox = () => {
  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <CustomInput label="Name" type="text" />
      <CustomInput label="Email" type="email" />
      <CustomInput label="Phone Number" type="text" />
      <CustomInput label="Password" type="password" />
      <CustomButton label="Signup" />
    </div>
  );
};

export default SignupBox;
