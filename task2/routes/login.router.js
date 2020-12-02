const { Router } = require('express');

const loginRouter = Router();
const controller = require('../controllers/controller');
const loginMiddleware = require('../middleware/login.middleware');

loginRouter.get('/', loginMiddleware.checkIfLogged, controller.loginUser);
loginRouter.post('/', loginMiddleware.checkLoginDetails, controller.loginUser);

module.exports = loginRouter;
