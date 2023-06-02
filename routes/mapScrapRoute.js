const router = require('express').Router(),
    scrapController = require('../controllers/scrapController');

router.get("/", scrapController.mapscrap);

module.exports = router;