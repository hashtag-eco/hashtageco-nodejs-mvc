const router = require('express').Router(),
    productController = require('../controllers/productController');

    console.log("상품라우팅파일");
router.get("/", productController.product);
router.get("/zeroWaste", productController.getZeroWasteProduct);
router.get("/upcycling", productController.upcyclingProduct);
router.get("/lowCarbon", productController.lowCarbonProduct);

module.exports = router;