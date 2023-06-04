const db = require("../models/index"),
  Member = db.member,
  Sequelize = require("sequelize"),
  Op = db.Sequelize.Op;

// root(/) view 랜더링
// exports.home = (req, res) => {
//   res.render("/");
// };

// 홈 view 랜더링
exports.home = async (req, res) => {
  var isLogined = req.session.login;
  console.log("session 객체 확인(home) :", req.session);
  // res.render("home");
  if (req.session.login) {
    //로그인 성공시 홈화면
    try {
      res.render("partials/navbar", { isLogined: isLogined });
    } catch (err) {
      res.status(501).send({
        message: err.message,
      });
    }
  } else {
    //로그인 실패시 홈화면 (처음 홈화면)
    req.session.login = false;
    req.session.idx = -1;
    res.render("login");
  }
};

// 회원 가입 view 랜더링
exports.join = (req, res) => {
  res.render("signup");
};

// 로그인 view 랜더링
exports.login = (req, res) => {
  res.render("login");
};

// 로그인 실패 시 view 랜더링

// 로그아웃 시 view 랜더링
