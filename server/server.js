const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: {
    origin: 'http://localhost:3000/',
  },
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log('Socket connection established. Messages is logged below:');
    console.log(data);
    socket.emit('messageBack', data);
  });
  socket.on('close', () => {
    console.log('socket connection closed');
  });
});

server.listen(5500, () => {
  console.log('Express server runs on port 5500');
});
app.get('/', (req, res) => {
  res.status(200).json('Server works with get request');
});
