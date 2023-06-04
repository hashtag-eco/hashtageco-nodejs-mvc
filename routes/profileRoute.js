const router = require("express").Router(),
  userController = require("../controllers/userController");

router.get("/:memberId", userController.profile);

module.exports = router;
