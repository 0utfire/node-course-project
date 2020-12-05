const { Router } = require('express');

const usersRouter = Router();
const controller = require('../controllers/controller');
// const { usersMiddleware } = require('../middleware');

usersRouter.get('/', controller.getUsers);

module.exports = usersRouter;
