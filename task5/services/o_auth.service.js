const { O_auth, User } = require('../database/models');

module.exports = {
    createTokenPair: (tokenPair) => O_auth.create(tokenPair),

    getAccessTokenUserByParams: (access_token) => User.findOne({
        include: {
            model: O_auth,
            where: { access_token }
        }
    }),

    getRefreshTokenUserByParams: (refresh_token) => User.findOne({
        include: {
            model: O_auth,
            where: { refresh_token }
        }
    }),

    deleteToken: (access_token) => O_auth.destroy({
        where: { access_token }
    })
};
