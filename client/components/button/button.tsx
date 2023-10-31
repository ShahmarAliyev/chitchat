'use client';

import React, { FC } from 'react';
import { customButtonProps } from '../types';

const Button: FC<customButtonProps> = (props) => {
  const { children, type, click } = props;
  return (
    <button
      onClick={click}
      className='cursor-pointer border text-center  h-10 bg-gray-50 flex justify-center items-center rounded '
    >
      {children}
    </button>
  );
};

export default Button;
