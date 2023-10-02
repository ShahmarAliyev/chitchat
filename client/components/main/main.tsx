import React, { useState } from 'react';
import * as io from 'socket.io-client';
import './main.scss';
import { useEffect } from 'react';
import Register from '../auth/register';

// const socket = io.connect('http://localhost:5500/', {
//   transports: ['websocket'],
// });

const Main = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  // useEffect(() => {
  //   socket.on('messageBack', (messageBack: string) => {
  //     console.log('message came back', messageBack);
  //     setChat((prevChat) => [...prevChat, messageBack]);
  //   });
  //   return () => {
  //     socket.off('messageBack');
  //   };
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };
  // const handleSendMessage = (): void => {
  //   socket.emit('message', message);
  // };
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
      <Register />
    </div>
  );
};

export default Main;
