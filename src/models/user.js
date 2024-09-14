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
        allowNull: false,
        validate: {
            len: [10, 10]
        }
    },
    idnumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [16, 16]
        }
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cell: {
        type: DataTypes.STRING,
        allowNull: false
    },
    village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farm_province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farm_district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farm_sector: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farm_cell: {
        type: DataTypes.STRING,
        allowNull: false
    },
    farm_village: {
        type: DataTypes.STRING,
        allowNull: false
    },
    planted: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avocadotype: {
        type: DataTypes.STRING,
        allowNull: true // Only required if planted is 'yego'
    },
    mixedpercentage: {
        type: DataTypes.STRING,
        allowNull: true // Only required if avocadotype is 'bivanze'
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
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = { User, sequelize };