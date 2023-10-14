const express = require('express');
const authController = require('../controllers/authController');
const dashboardRouter = express.Router();

dashboardRouter.get('/', authController.authenticateUser, (req, res) => {
  res.redirect(process.env.FRONTEND_URL);
});

module.exports = dashboardRouter;
