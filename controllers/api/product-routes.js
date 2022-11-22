const router = require('express').Router();
const { Product, Store } = require('../../models');

// get all products 
router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
            'id',
            'product_name',
            'product_description',
            'store_id'
        ],
        include: [
            { model: Store }
        ]
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get product by id 
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        }, attributes: [
            'id',
            'product_name',
            'product_description',
            'store_id'
        ],
        include: [
            { model: Store }
        ]
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST add new product
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        store_id: req.body.store_id
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;