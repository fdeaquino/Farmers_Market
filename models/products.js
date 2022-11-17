const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Products extends Model {}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100]
            }
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [100]
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
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
        modelName: 'products',
        updatedAt: false
    }
);
