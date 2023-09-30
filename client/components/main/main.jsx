import React, { useState } from 'react';
import './main.scss';
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5500/', {
  transports: ['websocket'],
});

const Main = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('messageBack', (messageBack) => {
      console.log('message came back', messageBack);
      setChat((prevChat) => [...prevChat, messageBack]);
    });
    return () => {
      socket.off('messageBack');
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = (e) => {
    console.log('message is ', message);
    socket.emit('message', message);
  };
  return (
    <div>
      <input
        type='text'
        onChange={handleChange}
        placeholder='message'
        value={message}
      />
      <button onClick={handleSendMessage}>Send Message </button>
      ALL Messages
      <div>{chat}</div>
    </div>
  );
};

export default Main;
