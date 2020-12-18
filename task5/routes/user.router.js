const { Router } = require('express');

const userRouter = Router();
const { userController } = require('../controllers');
const { logMiddleware, userMiddleware } = require('../middleware');

userRouter.get('/',
    userController.getUsers);

userRouter.get('/:id',
    userMiddleware.checkIfIdValid,
    userController.getUsersById);

userRouter.post('/',
    userMiddleware.checkIfDataValid,
    userMiddleware.checkIfEmailExists,
    userController.registerUser);

userRouter.put('/:id',
    userMiddleware.checkIfIdValid,
    userMiddleware.checkIfUpdateDataValid,
    userMiddleware.checkIfEmailExistsUpdate,
    userController.updateUserByID);

userRouter.delete('/',
    logMiddleware.checkAccessToken,
    userMiddleware.checkIfUserExists,
    userController.deleteUser);

module.exports = userRouter;
