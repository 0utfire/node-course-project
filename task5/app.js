const express = require('express');
const { sequelize } = require('./dataBase');
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
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});

sequelize.sync({ force: true, alter: true })
    .then(() => app.listen(3000, (err) => (err && console.log(err)) || console.log('Listen 3000 ...')))
    .catch(console.log);
