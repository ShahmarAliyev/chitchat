import React, { useState } from 'react';
import * as io from 'socket.io-client';
import './main.scss';
import { useEffect } from 'react';

const socket = io.connect('http://localhost:5500/', {
  transports: ['websocket'],
});

const Main = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    socket.on('messageBack', (messageBack: string) => {
      console.log('message came back', messageBack);
      setChat((prevChat) => [...prevChat, messageBack]);
    });
    return () => {
      socket.off('messageBack');
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };
  const handleSendMessage = (): void => {
    socket.emit('message', message);
  };
  return (
    <div>
      <input
        type='text'
        onChange={() => handleChange}
        placeholder='message'
        value={message}
      />
      <button onClick={() => handleSendMessage}>Send Message </button>
      ALL Messages
      <div>{chat}</div>
    </div>
  );
};

export default Main;
