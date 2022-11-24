const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Store, User, Comment, Category, StoreCategory, Product, Rating } = require('../../models');
const { Store, User, Category, StoreCategory, Product, Rating } = require('../models');

router.get('/', (req, res) => {
    Store.findAll({
        where: {
            // use this id from the session
        },
        // doublecheck attributes - should we show the store rating?
        attributes: [
            'id',
            'store_name',
            'store_description'
        ],
        include: [
            {
                model: Product,
                attributes: ['product_name'],
                include: {
                    model: Store,
                    attributes: ['store_name']
                }
            },
            {
                model: Category,
                through: StoreCategory,
                as: 'categories'
            }
        ]
    })
    .then(dbStoreData => {
        // serialize data before passing to template
        const stores = dbStoreData.map(store => store.get({ plain: true }));
        res.render('dashboard', { stores, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
    
});


module.exports = router;