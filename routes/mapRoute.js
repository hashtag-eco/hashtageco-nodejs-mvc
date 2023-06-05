const router = require('express').Router(),
    mapController = require('../controllers/mapController');
    
    console.log("지도라우팅파일");
router.get("/", mapController.map);
router.get("/:category", mapController.getStore);

module.exports = router;