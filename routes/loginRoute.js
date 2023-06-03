const router = require("express").Router(),
  homeController = require("../controllers/homeController"),
  loginController = require("../controllers/loginController");
const session = require("express-session");

router.get("/", homeController.login);

// session 관련 코드 추가
router.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialize: true,
  })
);

router.post("/", async (req, res) => {
  loginController.login(res, req);
});

module.exports = router;
