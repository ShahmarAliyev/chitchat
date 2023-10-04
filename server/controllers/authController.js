const passport = require('passport');

const authController = {};

authController.passportAuthenticate = (req, res, next) => {
  passport.authenticate('google', { scope: ['email', 'profile'] })(
    req,
    res,
    next
  );
  console.log('passportAuthenticate');
};
authController.googleCallback = (req, res, next) => {
  console.log('googleCallback');
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  });
};
authController.checkSession = (req, res, next) => {
  console.log('checksession');
};
authController.googleSuccess = (req, res, next) => {
  console.log('googleSuccess');
};
authController.googleFailure = (req, res, next) => {
  console.log('googleFailure');
};

module.exports = authController;
