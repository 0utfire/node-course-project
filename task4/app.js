const express = require('express');
const expresshbs = require('express-handlebars');
const path = require('path');
const {
    // registerRouter, loginRouter,
    usersRouter
    // , errorRouter, logoutRouter, updateRouter
} = require('./routes');
const db = require('./database').GetInstance();

const app = express();

db.setModels();

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

// app.use('/register', registerRouter);
// app.use('/login', loginRouter);
app.use('/users', usersRouter);
// app.use('/update', updateRouter);
// app.use('/error', errorRouter);
// app.use('/logout', logoutRouter);

app.listen(3000, () => {
    console.log('App working');
});
