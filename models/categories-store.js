const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class CategoriesStores extends Model {}

CategoriesStores.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        store_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'store',
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
        modelName: 'categories_stores',
        updatedAt: false
    }
);

module.exports = CategoriesStores;