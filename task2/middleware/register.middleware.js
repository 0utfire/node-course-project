const fs = require('fs');
const path = require('path');
const users = require('../users.json');
const variable = require('../variables/variable');

module.exports = {
    checkIfDBExists: (req, res, next) => {
        try {
            if (!fs.existsSync(path.join(process.cwd(), 'users.json'))) {
                fs.writeFileSync(path.join(process.cwd(), 'users.json'), '[]');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    checkIfUserExists: (req, res, next) => {
        try {
            const { email } = req.body;
            users.forEach((user) => {
                if (user.email.toLowerCase() === email.toLowerCase()) {
                    variable.error = 'User exists. Please login';
                    res.redirect('/error');
                }
            });
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
