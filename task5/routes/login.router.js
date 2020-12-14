const { Router } = require('express');

const loginRouter = Router();
const { logController } = require('../controllers');
const { logMiddleware } = require('../middleware');

loginRouter.post('/',
    logMiddleware.checkIfLoginDetailsPresent,
    logMiddleware.checkIfUserInDBPresent,
    logMiddleware.checkLoginDetails,
    logController.loginUser);

module.exports = loginRouter;
