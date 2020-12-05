const variable = require('../variables/variable');

module.exports = {
    checkIfUserIsLogged: (req, res, next) => {
        try {
            // console.log('checkIfUserIsLogged', variable.isLogged);
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
