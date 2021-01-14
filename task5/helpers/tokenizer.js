const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = require('../config/config');

module.exports = () => {
    const access_token = jwt.sign({}, ACCESS_TOKEN_KEY, { expiresIn: '1h' });
    const refresh_token = jwt.sign({}, REFRESH_TOKEN_KEY, { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};
