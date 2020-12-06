const db = require('../database').GetInstance();
const { userService } = require('../services');

module.exports = {
    checkIfDBExists: (req, res, next) => {
        try {
            const userModel = db.getModel('userModel');

            userModel.sync();
            next();
        } catch (e) {
            res.status(400).json('Table does not exist');
        }
    },
    checkIfEmailExists: async (req, res, next) => {
        try {
            const { email } = req.body;
            const users = await userService.findUserByEmail(email);
            if (users[0]) throw new Error('User already exists');
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkIfEmailExistsUpdate: async (req, res, next) => {
        try {
            const { email } = req.query;
            const users = await userService.findUserByEmail(email);
            if (users[0]) throw new Error('Email already in use');
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkIfUserExists: async (req, res, next) => {
        try {
            const user = req.body;
            const users = await userService.findExactUser(user);
            if (!users[0]) throw new Error('No such user');
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkLoginDetails: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const users = await userService.checkLoginDetails(email, password);
            if (!users[0]) throw new Error('Invalid details');
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
