const express = require('express');
const router = express.Router();
const { getUserCoins, incrementCoins } = require('../controllers/UserController');

// Get coins for a user by telegram_id
router.get('/:telegram_id/coins', getUserCoins);

// Increment coins for a user by telegram_id
router.patch('/:telegram_id/increment', incrementCoins);

module.exports = router;
