'use client';
import React, { useState } from 'react';
import * as io from 'socket.io-client';
import './main.scss';
import { useEffect } from 'react';
import Register from '../auth/register';
import { useRouter } from 'next/navigation';
import Dashboard from '../dashboard/dashboard';
import { GetServerSidePropsContext } from 'next';
// import { cookies } from 'next/headers';

interface User {
  id: number;
  google_id: string;
  created_at: Date;
  email: string;
  display_name: string;
}

const Main = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col '>
      {/* <input
        type='text'
        onChange={() => handleChange}
        placeholder='message'
        value={message}
      />
      <button onClick={() => handleSendMessage}>Send Message </button>
      ALL Messages
      <div>{chat}</div> */}
      {/* {!user ? <Register /> : <Dashboard />} */}
      <Dashboard />
    </div>
  );
};

export default Main;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await fetch('http://localhost:5500/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch {}
}
// const socket = io.connect('http://localhost:5500/', {
//   transports: ['websocket'],
// });
// const handleSendMessage = (): void => {
//   socket.emit('message', message);
// };
// Redirect to dashboard if the user is authenticated
// if (user) {
//   push('/');
//   return null; // You can return null to avoid rendering the component temporarily
// }
// useEffect(() => {
//   // socket.on('messageBack', (messageBack: string) => {
//   //   console.log('message came back', messageBack);
//   //   setChat((prevChat) => [...prevChat, messageBack]);
//   // });
//   // return () => {
//   //   socket.off('messageBack');
//   // };

// }, []);
// useEffect(() => {
//   const getUser = () => {
//     fetch('http://localhost:5500/auth/login/success', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json();
//         }
//         throw new Error('authentication has been failed!');
//       })
//       .then((resObject) => {
//         console.log('resobj user', resObject.user);
//         // setUser(resObject.user);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   getUser();
// }, []);
