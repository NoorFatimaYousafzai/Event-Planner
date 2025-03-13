const express = require('express');
const router = express.Router();

const {
    createEvent,
    getEventSortedByDate,
} = require('../controllers/eventController');

router.post('/event', createEvent);
router.get('/event/:id', getEventSortedByDate);

module.exports = router;