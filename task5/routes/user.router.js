const { Router } = require('express');

const userRouter = Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userMiddleware.checkIfIdValid, userController.getUsersById);
userRouter.post('/',
    userMiddleware.checkIfDataValid, userMiddleware.checkIfEmailExists,
    userController.registerUser);
userRouter.put('/', userMiddleware.checkIfEmailExistsUpdateQuery, userController.updateUser);
userRouter.put('/:id',
    userMiddleware.checkIfIdValid, userMiddleware.checkIfEmailExistsUpdateParams,
    userController.updateUserByID);
userRouter.delete('/', userMiddleware.checkIfUserExists, userController.deleteUser);

module.exports = userRouter;
