module.exports = (client, DataTypes) => {
    const userModel = client.define(
        'users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );
    return userModel;
};
