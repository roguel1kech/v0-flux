const express = require('express');
const router = express.Router();
const controller = require('../controllers/dealsController');

router.get('/', controller.getAllDeals);
router.post('/', controller.createDeal);

module.exports = router;
