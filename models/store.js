const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Store extends Model {}

Store.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100]
            }
        },
        store_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100]
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'store',
        updatedAt: false
    }
);

module.exports = Store;
