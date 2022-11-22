const router = require('express').Router();

const userRoutes = require('./user-routes');
const storeRoutes = require('./store-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');

router.use('/users', userRoutes);   
router.use('/stores', storeRoutes);   
router.use('/categories', categoryRoutes);   
router.use('/products', productRoutes);   


module.exports = router;