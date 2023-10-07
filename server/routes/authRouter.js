const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();
const passport = require('passport');
require('../passport');

const CLIENT_URL = 'http://localhost:3000/';

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'login/failed',
  })
);
authRouter.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      // cookies: req.cookies
    });
  }
});
authRouter.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

module.exports = authRouter;
