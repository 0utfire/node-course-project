const { userService } = require('../services');
const {
    ErrorHandler, errors: {
        ID_LESS_0, NOT_VALID_BODY, ITEM_EXISTS, EMAIL_IN_USE, NO_SUCH_USER, INVALID_DETAILS
    }
} = require('../error');

module.exports = {
    checkIfDataValid: (req, res, next) => {
        try {
            const user = req.body;

            if (!user.name || !user.email || !user.password) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfIdValid: (req, res, next) => {
        try {
            const { id } = req.params;

            if (id < 0) {
                throw new ErrorHandler(ID_LESS_0.message, ID_LESS_0.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfEmailExists: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await userService.findUserByEmail(email);
            if (user) {
                throw new ErrorHandler(ITEM_EXISTS.message, ITEM_EXISTS.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfEmailExistsUpdateQuery: async (req, res, next) => {
        try {
            const { email } = req.query;
            if (email) {
                const [user] = await userService.findUserByEmail(email);
                if (user) {
                    throw new ErrorHandler(EMAIL_IN_USE.message, EMAIL_IN_USE.code);
                }
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfEmailExistsUpdateParams: async (req, res, next) => {
        try {
            const { email } = req.body;
            if (email) {
                const [user] = await userService.findUserByEmail(email);
                if (user) {
                    throw new ErrorHandler(EMAIL_IN_USE.message, EMAIL_IN_USE.code);
                }
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfUserExists: async (req, res, next) => {
        try {
            const user = req.body;
            const [exactUser] = await userService.findExactUser(user);
            if (!exactUser) {
                throw new ErrorHandler(NO_SUCH_USER.message, NO_SUCH_USER.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkLoginDetails: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const [user] = await userService.checkLoginDetails(email, password);
            if (!user) {
                throw new ErrorHandler(INVALID_DETAILS.message, INVALID_DETAILS.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};