const { carService } = require('../services');
const { errors: { OK, ITEM_CREATED } } = require('../error');

module.exports = {
    createCar: async (req, res) => {
        try {
            console.log(req.body);
            const car = await carService.createCar(req.body);
            res.status(ITEM_CREATED.code).json(car);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getAllCars: async (req, res) => {
        try {
            const cars = await carService.getAllCars();
            res.status(OK.code).json(cars);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    updateCar: async (req, res) => {
        try {
            const car = req.body;
            const update = req.query;
            await carService.updateCar(car, update);
            res.status(OK.code).json('Update successful');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const car = req.body;
            await carService.destroyCar(car);
            res.status(OK.code).json('Car deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
