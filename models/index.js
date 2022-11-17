const User = require('./User');
const Post = require('./Post');         // Import the Post model
const Comment = require('./Comment');   // Import the Comment model

module.exports = { User };

User.hasMany(Post, {                    // A User can have many Posts