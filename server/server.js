const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const app = express();
var session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const authRouter = require('./routes/authRouter');
const passportSetup = require('./passport');
const server = http.createServer(app);

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST, PUT, DELETE',
    credentials: true,
  })
);
// const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: {
    origin: 'http://localhost:3000/',
  },
});

app.use('/auth', authRouter);

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
app.use(passport.initialize());
app.use(passport.session());

server.listen(5500, () => {
  console.log('Express server runs on port 5500');
});
app.get('/failure', (req, res) => {
  res.json('error');
});
app.get('/', (req, res) => {
  res.json('success');
});
