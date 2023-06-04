const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/:category/:productId", productController.goProductDetail);

module.exports = router;