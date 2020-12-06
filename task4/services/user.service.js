const db = require('../database').GetInstance();

module.exports = {
    registerUser: (data) => {
        const userModel = db.getModel('userModel');

        return userModel.create(data);
    },

    findUsers: () => {
        const userModel = db.getModel('userModel');

        return userModel.findAll();
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
