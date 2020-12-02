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
};
