const { User } = require('../database/models');

module.exports = {
    findUserByEmail: (email) => User.findAll({
        where: {
            email
        }
    })
};
