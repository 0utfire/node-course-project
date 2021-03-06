const express = require('express');
require('dotenv').config();
const { APP_PORT } = require('./config/config');
const { sequelize } = require('./database');
const {
    loginRouter, userRouter, carRouter, logoutRouter
} = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/cars', carRouter);
app.use('/logout', logoutRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            message: err.message,
            ok: false
        });
});

sequelize.sync({ alter: false })
    .then(() => app.listen(3000, (err) => (err && console.log(err)) || console.log(`Listen ${APP_PORT} ...`)))
    .catch(console.log);
