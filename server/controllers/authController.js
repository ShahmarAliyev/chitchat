const passport = require('passport');

const authController = {};
authController.authenticateUser = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res.locals.user = null;
  }
};
module.exports = authController;
