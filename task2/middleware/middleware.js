const variable = require('../variables/variable');

module.exports = {
    checkIfErrorExists: (req, res, next) => {
        try {
            if (!variable.error) {
                res.redirect('/');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkIfUserIsLogged: (req, res, next) => {
        try {
            console.log('checkIfUserIsLogged', variable.isLogged);
            if (!variable.isLogged) {
                variable.error = 'You are not logged in.';
                res.redirect('/error');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
