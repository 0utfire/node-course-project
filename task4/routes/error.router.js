const { Router } = require('express');

const errorRouter = Router();
const controller = require('../controllers/controller');
const { errorMiddleware } = require('../middleware');

errorRouter.get('/', errorMiddleware.checkIfErrorExists, controller.renderErrorPage);

module.exports = errorRouter;
