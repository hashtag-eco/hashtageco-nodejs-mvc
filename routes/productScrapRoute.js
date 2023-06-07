const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.showProductScrap);
router.get("/", productController.deleteProductScrap);

module.exports = router;
