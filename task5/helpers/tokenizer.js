const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'KEY', { expiresIn: '1h' });
    const refresh_token = jwt.sign({}, 'KEY_ADD', { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};
