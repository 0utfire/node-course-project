const { errors: { OK, } } = require('../error');

module.exports = {
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
