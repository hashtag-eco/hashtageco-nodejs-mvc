const router = require("express").Router(),
  homeController = require("../controllers/homeController"),
  userController = require("../controllers/userController");

router.get("/", homeController.join);
router.post("/", async (req, res) => {
  userController.signup(res, req);
});

module.exports = router;
