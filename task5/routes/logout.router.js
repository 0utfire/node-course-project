const { Router } = require('express');

const logoutRouter = Router();
const { logController } = require('../controllers');

logoutRouter.get('/', logController.logoutUser);

module.exports = logoutRouter;
