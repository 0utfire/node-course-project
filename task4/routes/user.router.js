const { Router } = require('express');

const userRouter = Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

// registerRouter.get('/', controller.renderRegisterPage);
userRouter.get('/', userController.getUsers);
userRouter.post('/', userMiddleware.checkIfDBExists, userMiddleware.checkIfEmailExists, userController.registerUser);
userRouter.put('/', userMiddleware.checkIfEmailExistsUpdate, userController.updateUser);
userRouter.delete('/', userMiddleware.checkIfUserExists, userController.deleteUser);

module.exports = userRouter;
