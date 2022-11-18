const router = require('express').Router();         // Require the express router
const userRoutes = require('./user-routes');        // Require user-routes.js



router.use('/users', userRoutes);                   // Route to user-routes.js
module.exports = router;                            // Export the router