const User = require('./User');
const Post = require('./Post');         // Import the Post model
const Comment = require('./Comment');   // Import the Comment model

module.exports = { User };

User.hasMany(
    Store,                              // A User can have many Stores
    {
        foreignKey: 'store_id',
        onDelete: 'CASCADE'
    });

User.hasMany(
    Comment, 
    {                                   // A User can have many Comments
        foreignKey: 'comment_id',
        onDelete: 'CASCADE'
});

Comment.belongsTo(
    Store,
    {                                   // A Comment belongs to a Store
        foreignKey: 'store_id'
});

Store.hasMany(
    Comment,
    {                                   // A Store can have many Comments
        foreignKey: 'comment_id'
});

Store.hasMany(
    Categories,                         // A Store can have many Categories
    {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
    });

Categories.hasMany(Products,            // A Category can have many Products
    {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
    });

Products.belongsTo(
    Categories,                         // A Product belongs to a Category
    {
        foreignKey: 'category_id'
    });

module.exports = { User, Post, Comment };
 