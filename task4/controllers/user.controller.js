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
    updateUser: async (req, res) => {
        try {
            const user = req.body;
            const updates = req.query;
            await userService.updateUser(user, updates);
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
