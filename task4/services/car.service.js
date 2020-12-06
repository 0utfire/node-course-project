const db = require('../database').GetInstance();

module.exports = {
    createCar: (data) => {
        const carModel = db.getModel('carModel');

        return carModel.create(data);
    },
    // findUsers: () => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.findAll();
    // },
    // findUserByEmail: (email) => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.findAll({
    //         where: {
    //             email
    //         }
    //     });
    // },
    // findExactUser: (user) => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.findAll({
    //         where: {
    //             ...user
    //         }
    //     });
    // },
    // updateUser: (user, update) => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.update(
    //         { ...update },
    //         {
    //             where: {
    //                 ...user
    //             }
    //         }
    //     );
    // },
    // destroyUser: (user) => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.destroy(
    //         {
    //             where: {
    //                 ...user
    //             }
    //         }
    //     );
    // },
    // checkLoginDetails: (email, password) => {
    //     const carModel = db.getModel('carModel');
    //
    //     return carModel.findAll({
    //         where: {
    //             email,
    //             password
    //         }
    //     });
    // }
};
