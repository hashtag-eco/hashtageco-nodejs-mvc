const router = require('express').Router(),
    mapController = require('../controllers/mapController');
    
//router.get("/", mapController.map);
router.get("/:category", mapController.getStore);
//router.get("/category", mapController.updateMap);

module.exports = router;