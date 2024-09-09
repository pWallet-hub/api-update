const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

const User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idnumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cell: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    planted: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avocadotype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mixedpercentage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farmsize: {
        type: DataTypes.STRING,
        allowNull: false
    },
    treecount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    upinumber: {
        type: DataTypes.STRING,
        allowNull: true // Not mandatory
    },
    assistance: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users',
    timestamps: false
});

module.exports = { User, sequelize };