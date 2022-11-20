const router = require('express').Router();

const userRoutes = require('./user-routes');
const storeRoutes = require('./store-routes');

router.use('/users', userRoutes);   
router.use('/stores', storeRoutes);   

module.exports = router;