const sequelize = require('../config/connection');
const { Model, DataTypes, INTEGER } = require('sequelize');

class ratings extends Model {}

ratings .init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: INTEGER,
            valid: {
                min: 1,
                max: 5
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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
        modelName: 'ratings',
        updatedAt: false
    }
);
