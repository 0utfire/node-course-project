const { Router } = require('express');

const userRouter = Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

// registerRouter.get('/', controller.renderRegisterPage);
userRouter.get('/', userController.getUsers);
userRouter.get('/:email', userController.getUsersByEmail);
userRouter.post('/', userMiddleware.checkIfDBExists, userMiddleware.checkIfEmailExists, userController.registerUser);
userRouter.put('/', userMiddleware.checkIfEmailExistsUpdateQuery, userController.updateUser);
userRouter.put('/:id', userMiddleware.checkIfEmailExistsUpdateParams, userController.updateUserByID);
userRouter.delete('/', userMiddleware.checkIfUserExists, userController.deleteUser);

module.exports = userRouter;
