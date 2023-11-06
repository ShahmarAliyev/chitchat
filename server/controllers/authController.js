const passport = require('passport');

const authController = {};
authController.authenticateUser = (req, res, next) => {
  if (req.user) {
    res.locals.user = true;
  }
  return next();
};
module.exports = authController;
