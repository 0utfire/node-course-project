const users = require('../users.json');
const variable = require('../variables/variable');

module.exports = {
    checkLoginDetails: (req, res, next) => {
        try {
            const { email, password } = req.body;
            users.forEach((user) => {
                if (user.email.toLowerCase() === email.toLowerCase() && user.password === password) {
                    variable.isLogged = true;
                    variable.loggedUser = user;
                }
            });
            if (!variable.isLogged) {
                variable.error = 'Invalid email or password';
                res.redirect('/error');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkIfLogged: (req, res, next) => {
        try {
            console.log('checkIfLogged', variable.isLogged);
            if (variable.isLogged) {
                console.log('gotouser');
                res.redirect('/users');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
