const router = require('express').Router(),
    mapController = require('../controllers/mapController');
    
router.get("/", mapController.map);

module.exports = router;