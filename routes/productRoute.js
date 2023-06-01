const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.product);
router.get("/zeroWaste", productController.zeroWasteProduct);
router.get("/upcycling", productController.upcyclingProduct);
router.get("/lowCarbon", productController.lowCarbonProduct);

module.exports = router;