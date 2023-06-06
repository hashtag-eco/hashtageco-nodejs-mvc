const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.showProductScrap);

module.exports = router;
