import React from 'react';
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5500/', {
  transports: ['websocket'],
});
const Main = () => {
  useEffect(() => {
    const callServer = async () => {
      const request = await fetch('http://localhost:5500/');
      const data = await request.json();
      console.log(data);
    };
    callServer();
  }, []);
  return <div>Main</div>;
};

export default Main;
