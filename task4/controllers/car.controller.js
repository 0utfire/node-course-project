const { carService } = require('../services');

module.exports = {
    createCar: async (req, res) => {
        try {
            console.log(req.body);
            const car = await carService.createCar(req.body);
            res.status(201).json(car);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    // getUsers: async (req, res) => {
    //     try {
    //         const users = await carService.findUsers();
    //         res.json(users);
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },
    // updateUser: async (req, res) => {
    //     try {
    //         const user = req.body;
    //         const updates = req.query;
    //         await carService.updateUser(user, updates);
    //         res.status(200).json('Update successful');
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },
    // deleteUser: async (req, res) => {
    //     try {
    //         const user = req.body;
    //         await carService.destroyUser(user);
    //         res.status(200).json('User deleted');
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },
};
