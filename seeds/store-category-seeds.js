const { StoreCategory } = require('../models');

const storeCategoryData = [
    {
        store_id: 1,
        category_id: 1
    },
    {
        store_id: 2,
        category_id: 3

    }
    ,
    {
        store_id: 3,
        category_id: 3

    }
];

const seedStore = () => StoreCategory.bulkCreate(storeCategoryData);

module.exports = seedStore;