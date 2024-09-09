const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

const AuthUser = sequelize.define('AuthUser', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'assistant_admin'),
        allowNull: false
    }
}, {
    tableName: 'AuthUsers'
});

module.exports = { AuthUser, sequelize }
