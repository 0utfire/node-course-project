const { Router } = require('express');

const registerRouter = Router();
const controller = require('../controllers/controller');
const { registerMiddleware } = require('../middleware');

registerRouter.get('/', controller.renderRegisterPage);
registerRouter.post('/', registerMiddleware.checkIfDBExists, registerMiddleware.checkIfUserExists, controller.registerUser);

module.exports = registerRouter;
