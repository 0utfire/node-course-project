const db = require('../database').GetInstance();

module.exports = {
    registerUser: (user) => {
        const userModel = db.getModel('userModel');

        return userModel.create(user);
    },

    findUsers: () => {
        const userModel = db.getModel('userModel');

        return userModel.findAll();
    },
    findUsersWithCars: () => {
        const userModel = db.getModel('userModel');
        const carModel = db.getModel('carModel');

        return userModel.findAll({ include: carModel });
    },
    findUserByEmail: (email) => {
        const userModel = db.getModel('userModel');

        return userModel.findAll({
            where: {
                email
            }
        });
    },
    findExactUser: (user) => {
        const userModel = db.getModel('userModel');

        return userModel.findAll({
            where: {
                ...user
            }
        });
    },
    updateUser: (user, update) => {
        const userModel = db.getModel('userModel');

        return userModel.update(
            { ...update },
            {
                where: {
                    ...user
                }
            }
        );
    },
    destroyUser: (user) => {
        const userModel = db.getModel('userModel');

        return userModel.destroy(
            {
                where: {
                    ...user
                }
            }
        );
    },
    checkLoginDetails: (email, password) => {
        const userModel = db.getModel('userModel');

        return userModel.findAll({
            where: {
                email,
                password
            }
        });
    }
};
