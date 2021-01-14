const { Router } = require('express');

const userRouter = Router();
const { userController } = require('../controllers');
const { logMiddleware, userMiddleware } = require('../middleware');

userRouter.get('/',
    logMiddleware.checkAccessToken,
    userController.getUsers);

userRouter.get('/:id',
    logMiddleware.checkAccessToken,
    userMiddleware.checkIfIdValid,
    userController.getUsersById);

userRouter.post('/',
    logMiddleware.checkAccessToken,
    userMiddleware.checkIfDataValid,
    userMiddleware.checkIfEmailExists,
    userController.registerUser);

userRouter.put('/:id',
    logMiddleware.checkAccessToken,
    userMiddleware.checkIfIdValid,
    userMiddleware.checkIfUpdateDataValid,
    userMiddleware.checkIfEmailExistsUpdate,
    userController.updateUserByID);

userRouter.delete('/',
    logMiddleware.checkAccessToken,
    userMiddleware.checkIfUserExists,
    userController.deleteUser);

module.exports = userRouter;
