// 로그아웃 라우터 생성

const router = require("express").Router(),
  loginController = require("../controllers/loginController");

router.get("/", loginController.logout);

module.exports = router;
