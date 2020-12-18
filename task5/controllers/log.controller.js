const { errors: { OK, } } = require('../error');
const { o_authService } = require('../services');
const tokenizer = require('../helpers/tokenizer');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { id } = req.user;
            const token_pair = tokenizer();

            await o_authService.createTokenPair({ userId: id, ...token_pair });
            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    },

    // loginUser: (req, res) => {
    //     try {
    //         res.status(OK.code).json('You are logged in');
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    logoutUser: (req, res) => {
        try {
            res.status(OK.code).json('You are logged out');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
