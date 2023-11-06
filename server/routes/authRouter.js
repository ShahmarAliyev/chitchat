const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();
const passport = require('passport');
require('../passport');

const CLIENT_URL = 'http://localhost:3000/';
authRouter.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log('error');
    }
    req.session.destroy();
    res.redirect(process.env.FRONTEND_URL);
  });
});

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  function (req, res) {
    console.log('req,user, before redirect', req.user);
    res.redirect('/');
  }
);

authRouter.get('/success', (req, res) => {
  res.status(200).json(req.user);
  console.log('success, line33', req.user);
});
authRouter.get('/failed', (req, res) => {
  console.log('success, line33', req.user);
});
module.exports = authRouter;
