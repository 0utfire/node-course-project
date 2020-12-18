const { O_auth, User } = require('../database/models');

module.exports = {
    createTokenPair: (tokenPair) => O_auth.create(tokenPair),

    getTokenUserByParams: (access_token) => User.findOne({
        include: {
            model: O_auth,
            where: { access_token },
        },
    })
};
