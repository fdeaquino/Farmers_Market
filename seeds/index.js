const seedCategories = require('./categories-seeds');
const seedProducts = require('./products-seeds');
const seedStore = require('./store-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comments-seeds');
const seedRatings = require('./ratings-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('database synced!');
    await seedUsers();
    console.log('users seeded!');
    await seedStore();
    console.log('store seeded!');
    await seedCategories();
    console.log('categories seeded!');
    await seedProducts();
    console.log('products seeded!');
    await seedComments();
    console.log('comments seeded!');
    process.exit(0);
    await seedRatings();
    console.log('ratings seeded!');
    process.exit(0);
    
};

seedAll();

