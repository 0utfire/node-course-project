module.exports = (client, DataTypes) => {
    const students = client.define(
        'students',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: 'students',
            timestamps: false
        }
    );
    return students;
};
