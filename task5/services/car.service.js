const { Car } = require('../dataBase/models');

module.exports = {
    createCar: (car) => Car.create(car),

    getAllCars: () => Car.findAll(),
    findExactCar: (car) => Car.findAll({
        where: {
            ...car
        }
    }),
    updateCar: (car, update) => Car.update(
        { ...update },
        {
            where: {
                ...car
            }
        }
    ),
    destroyCar: (car) => Car.destroy(
        {
            where: {
                ...car
            }
        }
    ),
};
