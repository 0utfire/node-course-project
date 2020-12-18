const jwt = require('jsonwebtoken');
const { loginValidator } = require('../validators');
const { logService, o_authService } = require('../services');
const { ErrorHandler, errors: { NOT_VALID_BODY, INVALID_DETAILS, NOT_VALID_TOKEN } } = require('../error');
const { compare } = require('../helpers/password.hasher');

module.exports = {
    checkIfLoginDetailsPresent: (req, res, next) => {
        try {
            const { value, error } = loginValidator.validate(req.body);
            req.body = value;

            if (error) {
                throw new ErrorHandler(error.details[0].message, NOT_VALID_BODY.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkEmailInDB: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await logService.findUserByEmail(email);

            if (!user) {
                throw new ErrorHandler(INVALID_DETAILS.message, INVALID_DETAILS.code);
            }

            req.body.hash = user.password;
            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkPasswordInDB: async (req, res, next) => {
        try {
            const { password, hash } = req.body;

            await compare(password, hash);
            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('authorization');

            if (!access_token) {
                throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
            }

            jwt.verify(access_token, 'KEY', (err) => {
                if (err) {
                    throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
                }
                next();
            });

            const userWithToken = await o_authService.getTokenUserByParams(access_token);
            if (!userWithToken) {
                throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
            }
            req.user = userWithToken;
            next();
        } catch (e) {
            next(e);
        }
    },
};
