const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.showProductController);

module.exports = router;