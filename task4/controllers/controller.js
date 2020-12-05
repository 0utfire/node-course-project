// const fs = require('fs');
// const variable = require('../variables/variable');
// const users = require('../users.json');
const services = require('../services/service');

module.exports = {
    // renderRegisterPage: (req, res) => {
    //     const { isLogged, loggedUser } = variable;
    //     res.render('register', { isLogged, loggedUser });
    // },
    // registerUser: (req, res) => {
    //     // console.log(req.body);
    //     services.registerUser(req.body);
    //     res.redirect('/users');
    // },
    // loginUser: (req, res) => {
    //     // console.log('loginUser', variable.loggedUser);
    //     if (Object.keys(variable.loggedUser).length) {
    //         // console.log('gotouser');
    //         res.redirect('/users');
    //     }
    //     if (!Object.keys(variable.loggedUser).length) {
    //         // console.log('renderlogin');
    //         res.render('login');
    //     }
    // },
    // renderErrorPage: (req, res) => {
    //     const { error } = variable;
    //     res.render('error', { error });
    // },
    // logoutUser: (req, res) => {
    //     services.logoutUser();
    //     res.redirect('/');
    // },
    // renderUsersPage: (req, res) => {
    //     const { isLogged, loggedUser } = variable;
    //     // console.log(loggedUser);
    //     res.render('users', { loggedUser, users, isLogged });
    // },
    // renderUpdatePage: (req, res) => {
    //     const { loggedUser } = variable;
    //     // console.log(loggedUser);
    //     res.render('update', { loggedUser });
    // },
    // updateUser: (req, res) => {
    //     const { name, email, password } = req.params;
    //     const updatedUser = { name, email, password };
    //     users.forEach((user) => {
    //         if (user.email.toLowerCase() === variable.loggedUser.email.toLowerCase()) {
    //             user = updatedUser;
    //         }
    //     });
    //     fs.writeFileSync('users.json', JSON.stringify(users), (err) => {
    //         if (err) throw err;
    //     });
    //     res.redirect('/users');
    // },
    getUsers: async (req, res) => {
        try {
            const users = await services.findUsers();
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
