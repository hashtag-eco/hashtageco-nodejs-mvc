const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.productdetail);

module.exports = router;