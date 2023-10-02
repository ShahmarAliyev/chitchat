import React from 'react';

export type customInputProps = {
  type: string;
  value: string;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ReactNode =
  | React.ReactElement
  | string
  | number
  | boolean
  | null
  | undefined;

export type customButtonProps = {
  children: ReactNode;
  type: string;
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
