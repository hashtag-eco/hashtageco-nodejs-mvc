const router = require("express").Router(),
  userController = require("../controllers/userController");

router.get("/", userController.profile);
router.post("/", userController.passwordUpdate);

module.exports = router;
