const { loginValidator } = require('../validators');
const { logService } = require('../services');
const { ErrorHandler, errors: { NOT_VALID_BODY, INVALID_DETAILS } } = require('../error');
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

    checkIfUserInDBPresent: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await logService.findUserByEmail(email);

            if (!user) {
                throw new ErrorHandler(INVALID_DETAILS.message, INVALID_DETAILS.code);
            }

            req.body.hash = user.password;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkLoginDetails: async (req, res, next) => {
        try {
            const { password, hash } = req.body;

            await compare(password, hash);
            next();
        } catch (e) {
            next(e);
        }
    }
};
