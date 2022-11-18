const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class CategoryStore extends Model {}

CategoryStore.init(
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
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'category_store'
    }
);

module.exports = CategoryStore;