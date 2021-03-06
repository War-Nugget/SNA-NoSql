const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThoughts,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/Though-controller');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createThoughts);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;