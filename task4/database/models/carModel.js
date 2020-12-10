module.exports = (client, DataTypes) => {
    const carModel = client.define(
        'car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );
    const userModel = require('./userModel')(client, DataTypes);

    carModel.belongsTo(userModel);
    userModel.hasMany(carModel);
    return carModel;
};
