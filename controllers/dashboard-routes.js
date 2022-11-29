const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Store, User, Comment, Category, StoreCategory, Product, Rating } = require('../../models');
const { Store, User, Category, StoreCategory, Product, Rating } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    Store.findAll({
        where: {
            // TODO: Add session info
            user_id: req.session.user_id
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

router.get('/add-store', withAuth, (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ]
    })
        .then(dbCategoryData => {
            const categories = dbCategoryData.map(category => category.get({ plain: true }));
            res.render('add-store', { categories, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });

});


router.get('/add-product', withAuth, (req, res) => {
    res.render('add-product', { loggedIn: true });
});



module.exports = router;