const express = require('express');
const session = require('express-session');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv').config();
const passport = require('passport');

const passportSetup = require('./passport');
const authRouter = require('./routes/authRouter');
const dashboardRouter = require('./routes/dashboardRouter');
const authController = require('./controllers/authController');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  session({
    name: 'User Session',
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    maxAge: 6000,
  })
);
app.use(passport.initialize());
app.use(passport.session());
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
    console.log('Socket connection established Messages is logged below:');
    console.log(data);
    socket.emit('messageBack', data);
  });
  socket.on('close', () => {
    console.log('socket connection closed');
  });
});
app.get('/', authController.authenticateUser, (req, res) => {
  console.log('requser', req);
  console.log('res.localuser  / server', res.locals.user);
  res.status(200).json('checked');
});
app.use('/auth', authRouter);
server.listen(process.env.EXPRESS_PORT || 5500, () => {
  console.log('Express server runs on port 5500');
});
