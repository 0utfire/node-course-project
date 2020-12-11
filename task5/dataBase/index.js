const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('node-migrations',
    'root',
    'Nathan7662', {
        host: 'localhost',
        dialect: 'mysql'
    });
