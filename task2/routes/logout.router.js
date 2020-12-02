const { Router } = require('express');

const logoutRouter = Router();
const controller = require('../controllers/controller');

logoutRouter.get('/', controller.logoutUser);

module.exports = logoutRouter;
