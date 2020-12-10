const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('node-database',
    'root',
    'Nathan7662', {
        host: 'localhost',
        dialect: 'mysql'
    });
