const User = require('./User');
const Product = require('./Product');               // Import the Products model
const Comment = require('./Comment');               // Import the Comment model
const Category = require('./Category');
const Store = require('./Store');
const StoreCategory = require('./StoreCategory');
const Rating = require('./Rating');

User.hasMany(Store,                              // A User can have many Stores
    {
        foreignKey: 'user_id'
    });

User.hasMany(Rating,
    {                                   // A User can have many Comments
        foreignKey: 'user_id'
    });

User.hasMany(Comment,
    {
        foreignKey: 'user_id'
    });

Store.hasMany(Category,
    {                                   // A Store can have many Category
        foreignKey: 'store_id'
    });

Store.hasMany(Product,
    {                                   // A Store can have many Product
        foreignKey: 'store_id'
    });

Store.hasMany(Comment,
    {                                   // A Store can have many Comments
        foreignKey: 'store_id'
    });

Store.hasMany(Rating,
    {                                   // A Store can have many Ratings
        foreignKey: 'store_id'
    });

Store.belongsTo(User,                               // A Store belongs to a User
    {
        foreignKey: 'user_id'
    });

Product.belongsTo(Store,
    {                                   // A Product belongs to a Store
        foreignKey: 'store_id'
    });

Rating.belongsTo(Store,
    {                                   // A Rating belongs to a Store
        foreignKey: 'store_id',
    });

Rating.belongsTo(User,
    {                                   // A Rating belongs to a User
        foreignKey: 'user_id',
    });

Comment.belongsTo(Store,
    {                                   // A Comment belongs to a Store
        foreignKey: 'store_id'
    });

Comment.belongsTo(User,
    {
        foreignKey: 'user_id',
    })

// Category.hasMany(
//     Product,                           // A Category can have many Product
//     {
//         foreignKey: 'category_id',
//         onDelete: 'CASCADE'
//     });

// Product.belongsTo(
//     Category,                         // A Product belongs to a Category
//     {
//         foreignKey: 'category_id'
//     });

// Many to Many Associations
Category.belongsToMany(Store,                              // A Category can have many Stores
    {
        through: StoreCategory,
        foreignKey: 'category_id'
    });

Store.belongsToMany(Category,                         // A Store belongs to a Category
    {
        through: StoreCategory,
        foreignKey: 'store_id'
    });



module.exports = { User, Category, Store, StoreCategory, Rating, Product, Comment };
