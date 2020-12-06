module.exports = (client, DataTypes) => {
    const carModel = client.define(
        'cars',
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
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );
    carModel.associate = (models) => {
        carModel.belongsTo(models.users, { foreignKey: 'user_id', onUpdate: 'cascade', onDelete: 'cascade' });
    };
    return carModel;
};
