const { Router } = require('express');

const loginRouter = Router();
const { logController } = require('../controllers');
const { logMiddleware } = require('../middleware');

loginRouter.post('/',
    logMiddleware.checkIfLoginDetailsPresent,
    logMiddleware.checkEmailInDB,
    logMiddleware.checkPasswordInDB,
    logController.loginUser);

loginRouter.post('/refresh',
    logMiddleware.checkRefreshToken,
    logController.refreshToken);

module.exports = loginRouter;
