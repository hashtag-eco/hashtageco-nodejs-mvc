const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/", productController.showProductScrap);
console.log("스크랩라우터");
router.post("/", productController.deleteProductScrap);


module.exports = router;
