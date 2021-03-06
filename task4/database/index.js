const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (() => {
    let instance;
    const InitConnection = () => {
        const client = new Sequelize('node-database', 'root', 'Nathan7662', {
            host: 'localhost',
            dialect: 'mysql'
        });
        const models = {};
        const modelsPath = path.join(process.cwd(), 'database', 'models');
        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelsPath, model));
                    models[model] = modelFile(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (ModelName) => models[ModelName]
        };
    };

    return {
        GetInstance: () => {
            if (!instance) {
                instance = InitConnection();
            }
            return instance;
        }
    };
})();
