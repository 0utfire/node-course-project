const { carService } = require('../services');
const { Car } = require('../dataBase/models');

module.exports = {
    checkIfDBExists: (req, res, next) => {
        try {
            Car.sync();
            next();
        } catch (e) {
            res.status(400).json('Table does not exist');
        }
    },
    checkIfCarExists: async (req, res, next) => {
        try {
            const car = req.body;
            const cars = await carService.findExactCar(car);
            if (cars[0]) throw new Error('Car already exists');
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
