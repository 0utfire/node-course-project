const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const User = require('./User');

class O_auth extends Model {
}

O_auth.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },

    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
    },
}, { sequelize, timestamps: false });

User.hasMany(O_auth, { foreignKey: 'userId' });
O_auth.belongsTo(User, { foreignKey: 'userId' });

module.exports = O_auth;
