const { Router } = require('express');

const errorRouter = Router();
const controller = require('../controllers/controller');
const middleware = require('../middleware/middleware');

errorRouter.get('/', middleware.checkIfErrorExists, controller.renderErrorPage);

module.exports = errorRouter;
