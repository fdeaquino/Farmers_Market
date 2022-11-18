    const { Store } = require('../models');

    const storedata = [
        {
            store_name: 'Farmers Market',
            store_description: 'Fresh Produce',
            user_id: 1,
            category_id: 1
        },
        {
            store_name: 'Ranchers Market',
            store_description: 'Fresh Meat',
            user_id: 2,
            category_id: 2
        },
        {
            store_name: 'Fishers Market',
            store_description: 'Fresh Fish',
            user_id: 3,
            category_id: 3
        }
    ];

    const seedStore = () => Store.bulkCreate(storedata);

    module.exports = seedStore;

