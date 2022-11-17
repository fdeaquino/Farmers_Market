const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Categories extends Model {}

Categories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100]
            }
        },
        store_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'store',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'categories',
        updatedAt: false
    }
);

module.exports = Categories;