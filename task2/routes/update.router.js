const { Router } = require('express');

const updateRouter = Router();
const controller = require('../controllers/controller');
// const { usersMiddleware } = require('../middleware');

updateRouter.get('/', controller.renderUpdatePage);
updateRouter.put('/', controller.updateUser);

module.exports = updateRouter;
