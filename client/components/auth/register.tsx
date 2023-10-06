import React, { FC, useEffect, useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';

const Register: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClick = async () => {
    window.location.href = 'http://localhost:5500/auth/google';
  };

  return (
    <div className='flex justify-center items-center flex-col w-50 bg-rgb'>
      <h1 className='text-3xl mb-5'>Register</h1>
      <Input
        changeHandler={(e) => {
          setEmail(e.target.value);
        }}
        placeholder='Enter Email'
        type='email'
        value={email}
      />
      <Input
        changeHandler={(e) => {
          setPassword(e.target.value);
        }}
        placeholder='Your password'
        type='password'
        value={password}
      />
      <Button
        type='regular'
        click={() => {
          handleClick();
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default Register;
