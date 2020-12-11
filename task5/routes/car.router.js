const { Router } = require('express');

const carRouter = Router();
const { carController } = require('../controllers');
const { carMiddleware } = require('../middleware');

carRouter.get('/', carController.getAllCars);
carRouter.post('/', carMiddleware.checkIfCarExists, carController.createCar);
carRouter.put('/', carMiddleware.checkIfCarExists, carController.updateCar);
carRouter.delete('/', carController.deleteCar);

module.exports = carRouter;
