const router = require('express').Router(),
    productController = require('../controllers/productController');

router.get("/:page", productController.getLowCarbonProduct);
router.post("/:page", productController.updateScrap);

module.exports = router;