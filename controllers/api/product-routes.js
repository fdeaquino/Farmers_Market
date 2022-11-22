const router = require('express').Router();
const { Product, Store } = require('../../models');

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
})

module.exports = router;