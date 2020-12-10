module.exports = {
    up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.bulkInsert('users', [
            {
                id: 1, name: 'Roman', email: 'roman.r@namecheap.com', password: '123456'
            },
            {
                id: 2, name: 'Andriy', email: 'andriy.k@namecheap.com', password: '123456'
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
        await queryInterface.bulkDelete('users',
            {
                id: [
                    1,
                    2
                ]
            });
    }
};
