const router = require("express").Router(),
  homeController = require("../controllers/homeController");

router.get("/", homeController.signup);
router.post("/", async (req, res, err) => {
  homeController.signup(res, req);
});

module.exports = router;
