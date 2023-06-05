const router = require("express").Router(),
  scrapController = require("../controllers/scrapController");

router.get("/", scrapController.productscrap);

module.exports = router;
