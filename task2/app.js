const express = require('express');
const expresshbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');
const jsonData = require('./users.json');

const app = express();

let error = '';
let isLogged = false;
let loggedUser = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.use(express.static(path.join(process.cwd(), 'public')));

app.set('view engine', '.hbs');
app.engine('.hbs', expresshbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.redirect('/register');
});

app.get('/register', (req, res) => {
    res.render('register', { isLogged, loggedUser });
});

app.post('/register', (req, res) => {
    let userExists = false;
    const { name, email, password } = req.body;

    jsonData.forEach((user) => {
        if (user.email.toLowerCase() === email.toLowerCase()) {
            userExists = true;
        }
    });
    if (userExists) {
        error = 'User exists. Please login';
        res.redirect('/error');
    }
    if (!userExists) {
        isLogged = true;
        loggedUser = { name, email, password };
        jsonData.push(loggedUser);
        fs.writeFileSync('users.json', JSON.stringify(jsonData), (err) => {
            if (err) throw err;
            console.log('User registered');
        });
        res.redirect('/users');
    }
});

app.get('/login', (req, res) => {
    if (isLogged) {
        res.redirect('/users');
    }
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    jsonData.forEach((user) => {
        if (user.email.toLowerCase() === email.toLowerCase() && user.password === password) {
            isLogged = true;
            loggedUser = user;
        }
    });
    if (isLogged) {
        res.redirect('/users');
    }
    if (!isLogged) {
        error = 'Invalid email or password';
        res.redirect('/error');
    }
});

app.get('/users', (req, res) => {
    if (!isLogged) {
        error = 'You are not logged in.';
        res.redirect('/error');
        res.end();
    }
    res.render('users', { loggedUser, users: jsonData, isLogged });
});

app.get('/error', (req, res) => {
    if (!error) {
        res.redirect('/');
    }
    res.render('error', { error });
});

app.get('/logout', (req, res) => {
    isLogged = false;
    loggedUser = {};
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('App working');
});
