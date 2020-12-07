const { userService } = require('../services');

module.exports = {
    registerUser: async (req, res) => {
        try {
            console.log(req.body);
            const users = await userService.registerUser(req.body);
            res.status(201).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    // logoutUser: (req, res) => {
    //     services.logoutUser();
    //     res.redirect('/');
    // },
    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getUsersByEmail: async (req, res) => {
        try {
            const { email } = req.params;
            console.log(email);
            const users = await userService.findUserByEmail(email);
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = req.body;
            const update = req.query;
            await userService.updateUser(user, update);
            res.status(200).json('Update successful');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    updateUserByID: async (req, res) => {
        try {
            const { id } = req.params;
            const update = req.body;
            await userService.updateUserByID(id, update);
            res.status(200).json('Update successful');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = req.body;
            await userService.destroyUser(user);
            res.status(200).json('User deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    loginUser: (req, res) => {
        try {
            res.status(200).json('You are logged in');
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
