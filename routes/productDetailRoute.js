const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.goZeroWasteProductDetail);

module.exports = router;