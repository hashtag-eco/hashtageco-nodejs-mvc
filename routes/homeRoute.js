const router = require("express").Router(),
  homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.get("/home", homeController.home);

module.exports = router;
