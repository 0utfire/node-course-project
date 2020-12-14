const bcrypt = require('bcrypt');
const { errors: { INVALID_DETAILS }, ErrorHandler } = require('../error');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPasswordMatch = await bcrypt.compare(password, hash);
        if (!isPasswordMatch) {
            throw new ErrorHandler(INVALID_DETAILS.message, INVALID_DETAILS.code);
        }
    }
};
