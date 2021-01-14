const { errors: { OK, NO_CONTENT } } = require('../error');
const { o_authService } = require('../services');
const tokenizer = require('../helpers/tokenizer');
const { AUTHORIZATION } = require('../config/constants');

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

    refreshToken: async (req, res, next) => {
        try {
            console.log('4');
            console.log(req.user);
            const { id } = req.user;
            console.log(id);
            console.log('5');
            const token = req.get(AUTHORIZATION);

            await o_authService.deleteToken(token);

            const token_pair = tokenizer();

            await o_authService.createTokenPair({ userId: id, ...token_pair });
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await o_authService.deleteToken(token);

            res.json(NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },
};
