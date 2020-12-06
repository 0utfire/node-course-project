const { Router } = require('express');

const carRouter = Router();
const { carController } = require('../controllers');
// const { userMiddleware } = require('../middleware');

// registerRouter.get('/', controller.renderRegisterPage);
// carRouter.get('/', carController.getUsers);
carRouter.post('/', carController.createCar);
// carRouter.put('/', carController.updateUser);
// carRouter.delete('/', carController.deleteUser);

module.exports = carRouter;
