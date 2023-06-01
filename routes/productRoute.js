const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.product);

module.exports = router;