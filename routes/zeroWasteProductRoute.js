const router = require('express').Router(),
    productController = require('../controllers/productController');

    console.log("상품라우팅파일");
router.get("/:page", productController.getZeroWasteProduct);
router.post("/:page", productController.updateScrap);
module.exports = router;