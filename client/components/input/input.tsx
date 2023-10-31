'use client';

import React from 'react';
import { customInputProps } from '../types';

const Input: React.FC<customInputProps> = (props) => {
  const { value, changeHandler, placeholder, type } = props;
  return (
    <input
      className='shadow appearance-none border rounded w-full mb-5 py-2 px-3 300 leading-tight focus:outline-none focus:shadow-outline'
      type={type}
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
