const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.showProductScrap);
router.post("/", productController.deleteProductScrap);
console.log("스크랩라우터");

module.exports = router;
