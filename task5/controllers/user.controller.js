const { userService } = require('../services');
const { ErrorHandler, errors: { NOT_VALID_ID, OK, ITEM_CREATED } } = require('../error');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const users = await userService.registerUser(req.body);
            res.status(ITEM_CREATED.code).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsersWithCars();
            res.status(OK.code).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getUsersById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const [user] = await userService.findUserById(id);
            if (!user) {
                throw new ErrorHandler(NOT_VALID_ID.message, NOT_VALID_ID.code);
            }
            res.status(OK.code).json(user);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = req.body;
            const update = req.query;
            await userService.updateUser(user, update);
            res.status(OK.code).json('Update successful');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    updateUserByID: async (req, res) => {
        try {
            const { id } = req.params;
            const update = req.body;
            await userService.updateUserByID(id, update);
            res.status(OK.code).json('Update successful');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = req.body;
            await userService.destroyUser(user);
            res.status(OK.code).json('User deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    loginUser: (req, res) => {
        try {
            res.status(OK.code).json('You are logged in');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    logoutUser: (req, res) => {
        try {
            res.status(OK.code).json('You are logged out');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
