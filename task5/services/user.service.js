const { User, Car } = require('../dataBase/models');

module.exports = {
    registerUser: (user) => User.create(user),

    findUsers: () => User.findAll(),

    findUsersWithCars: () => User.findAll({
        include: [{
            model: Car
        }]
    }),
    findUserByEmail: (email) => User.findAll({
        where: {
            email
        }
    }),
    findExactUser: (user) => User.findAll({
        where: {
            ...user
        }
    }),
    updateUser: (user, update) => User.update(
        { ...update },
        {
            where: {
                ...user
            }
        }
    ),
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
    ),
    checkLoginDetails: (email, password) => User.findAll({
        where: {
            email,
            password
        }
    })
};
