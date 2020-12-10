const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const User = require('./User');

class Car extends Model {
}

Car.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { sequelize, timestamps: false });

Car.belongsTo(User);
User.hasMany(Car);

module.exports = Car;
