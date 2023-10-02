import React from 'react';
import { customInputProps } from './types';

const Input: React.FC<customInputProps> = (props) => {
  const { value, changeHandler, placeholder, type } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
