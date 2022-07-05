const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Adds users to created routes
router.use('/users', userRoutes);

// Adds thoughts to created routes
router,use('/thoughts', thoughtRoutes);

module.exports = router;