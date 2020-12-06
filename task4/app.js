const express = require('express');
// const path = require('path');
const {
    loginRouter,
    userRouter,
    // , logoutRouter,
} = require('./routes');
const db = require('./database').GetInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
// app.use('/logout', logoutRouter);

app.listen(3000, () => {
    console.log('App working');
});
