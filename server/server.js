var session = require('express-session');
const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const passportSetup = require('./passport');
const authRouter = require('./routes/authRouter');
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST, PUT, DELETE',
    credentials: true,
  })
);
const io = new socket.Server(server, {
  cors: {
    origin: 'http://localhost:3000/',
  },
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log('Socket conn ection established. Messages is logged below:');
    console.log(data);
    socket.emit('messageBack', data);
  });
  socket.on('close', () => {
    console.log('socket connection closed');
  });
});

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);

server.listen(5500, () => {
  console.log('Express server runs on port 5500');
});
