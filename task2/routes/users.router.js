const { Router } = require('express');

const usersRouter = Router();
const controller = require('../controllers/controller');
const middleware = require('../middleware/middleware');

usersRouter.get('/', middleware.checkIfUserIsLogged, controller.renderUsersPage);

module.exports = usersRouter;
