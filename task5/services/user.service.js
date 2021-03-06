const { User, Car } = require('../database/models');

module.exports = {
    registerUser: (user) => User.create(user),

    findUsersWithCars: () => User.findAll({
        attributes: [
            'id',
            'name',
            'email'
        ],
        include: [{
            model: Car
        }]
    }),

    findUserByEmail: (email) => User.findAll({
        where: {
            email
        }
    }),

    findUserById: (id) => User.findAll({
        where: {
            id
        }
    }),

    findExactUser: (user) => User.findAll({
        where: {
            ...user
        }
    }),

    updateUserByID: (id, update) => User.update(
        { ...update },
        {
            where: {
                id
            }
        }
    ),

    destroyUser: (user) => User.destroy(
        {
            where: {
                ...user
            }
        }
    )
};
