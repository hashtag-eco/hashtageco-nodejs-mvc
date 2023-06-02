const router = require('express').Router(),
    productController = require('../controllers/productController');

    console.log("상품라우팅파일");
router.get("/", productController.getZeroWasteProduct);

module.exports = router;