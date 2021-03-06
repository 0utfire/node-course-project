const fs = require('fs');
const variable = require('../variables/variable');
const users = require('../users.json');

module.exports = {
    registerUser: (data) => {
        const { name, email, password } = data;
        const user = { name, email, password };
        variable.isLogged = true;
        variable.loggedUser = user;
        users.push(user);
        fs.writeFileSync('users.json', JSON.stringify(users), (err) => {
            if (err) throw err;
        });
    },
    logoutUser: () => {
        variable.isLogged = false;
        variable.loggedUser = {};
    }
};
