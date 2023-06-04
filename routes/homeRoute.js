const router = require("express").Router(),
  homeController = require("../controllers/homeController");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

router.get("/", homeController.home);
router.get("/home", homeController.home);

module.exports = router;
