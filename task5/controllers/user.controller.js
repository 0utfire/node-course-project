const { userService } = require('../services');
const { hash } = require('../helpers/password.hasher');
const { ErrorHandler, errors: { NOT_VALID_ID, OK, ITEM_CREATED } } = require('../error');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const password = await hash(req.body.password);

            Object.assign(req.body, { password });

            const user = await userService.registerUser(req.body);
            res.status(ITEM_CREATED.code).json(`Account with email ${user.email} created`);
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
            const { update } = req.body;

            if (update.password) {
                const password = await hash(update.password);
                Object.assign(update, { password });
            }

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

            if (update.password) {
                const password = await hash(update.password);
                Object.assign(update, { password });
            }

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
    }
};
