import React, { FC, useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

const Register: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleClick = () => {
    console.log('clicked');
  };

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('getBasicProfile' in res) {
      const googleLoginResponse = res as GoogleLoginResponse;
      console.log('Success', res.profileObj);
    } else {
      const googleLoginResponseOffline = res as GoogleLoginResponseOffline;
      console.log('Success (Offline)', googleLoginResponseOffline);
    }
    console.log(res);
  };

  const onFailure = (res: GoogleLoginResponse) => {
    console.log('Failure', res);
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
      {/* <Button
        type='regular'
        click={() => {
          handleClick();
        }}
      >
        Sign up
      </Button> */}
      <GoogleLogin
        clientId=''
        buttonText='login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Register;
