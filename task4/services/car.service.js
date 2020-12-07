const db = require('../database').GetInstance();

module.exports = {
    createCar: (car) => {
        const carModel = db.getModel('carModel');

        return carModel.create(car);
    },
    getAllCars: () => {
        const carModel = db.getModel('carModel');

        return carModel.findAll();
    },
    findExactCar: (car) => {
        const carModel = db.getModel('carModel');

        return carModel.findAll({
            where: {
                ...car
            }
        });
    },
    updateCar: (car, update) => {
        const carModel = db.getModel('carModel');

        return carModel.update(
            { ...update },
            {
                where: {
                    ...car
                }
            }
        );
    },
    destroyCar: (car) => {
        const carModel = db.getModel('carModel');

        return carModel.destroy(
            {
                where: {
                    ...car
                }
            }
        );
    },
};
