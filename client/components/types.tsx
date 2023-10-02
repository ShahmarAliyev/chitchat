import React from 'react';

export type customInputProps = {
  type: string;
  value: string;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
