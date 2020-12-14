const { Router } = require('express');

const logoutRouter = Router();
const { logController } = require('../controllers');

logoutRouter.get('/logout', logController.logoutUser);

module.exports = logoutRouter;
