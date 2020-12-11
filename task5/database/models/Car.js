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

User.hasMany(Car, { foreignKey: 'userId' });
Car.belongsTo(User, { foreignKey: 'userId' });

module.exports = Car;
