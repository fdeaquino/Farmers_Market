const User = require('./User');
const Post = require('./Post');             // Import the Post model
const Comment = require('./Comment');       // Import the Comment model
const Categories = require('./categories');
const { Store } = require('express-session');

module.exports = { User };

User.hasMany(
    Store,                              // A User can have many Stores
    {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });

Store.belongsTo(
    User,                               // A Store belongs to a User
    { 
        foreignKey: 'user_id',
        onDelete: 'CASCADE' 
    });

Store.hasMany(
    Products,
    {                                   // A Store can have many Products
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
});

Products.belongsTo(
    Store,
    {                                   // A Product belongs to a Store
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
});

Store.hasMany(
    Ratings,
    {                                   // A Store can have many Ratings
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
});

Ratings.belongsTo(
    Store,
    {                                   // A Rating belongs to a Store
        foreignKey: 'store_id',
    });
// User.hasMany(
//     Comment, 
//     {                                // A User can have many Comments
//         foreignKey: 'comment_id',
//         onDelete: 'CASCADE'
// });

Comment.belongsTo(
    Store,
    {                                   // A Comment belongs to a Store
        foreignKey: 'store_id'
});

Store.hasMany(
    Comment,
    {                                   // A Store can have many Comments
        foreignKey: 'store_id'
});



Categories.hasMany(
    Products,                           // A Category can have many Products
    {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
    });

Products.belongsTo(
    Categories,                         // A Product belongs to a Category
    {
        foreignKey: 'category_id'
    });
// Many to Many Associations
Categories.hasMany(
    Store,                              // A Category can have many Stores
    {
        through: 'categories_stores',
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
    });

Store.hasMany(
    Categories,                         // A Store belongs to a Category
    {
        through: 'categories_stores',
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
    });


module.exports = { User, Post, Comment };
 