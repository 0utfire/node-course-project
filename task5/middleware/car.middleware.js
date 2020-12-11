const { carService } = require('../services');
const {
    ErrorHandler, errors: { ITEM_EXISTS }
} = require('../error');

module.exports = {
    checkIfCarExists: async (req, res, next) => {
        try {
            const car = req.body;
            const [exactCar] = await carService.findExactCar(car);
            if (exactCar) {
                throw new ErrorHandler(ITEM_EXISTS.message, ITEM_EXISTS.code);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
};
