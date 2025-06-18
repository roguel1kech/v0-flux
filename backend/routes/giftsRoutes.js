const express = require('express');
const router = express.Router();
const controller = require('../controllers/giftsController');

router.get('/', controller.getAllGifts);
router.post('/', controller.createGift);

module.exports = router;
