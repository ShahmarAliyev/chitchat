import React, { FC, useState } from 'react';
import Input from '../input/input';

const Register: FC = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <div>
      <Input
        changeHandler={() => {}}
        placeholder='Enter Email'
        type='email'
        value={email}
      />
    </div>
  );
};

export default Register;
