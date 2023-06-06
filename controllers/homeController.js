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
  // sessionStorage.clear(); // 모든 세션 객체 삭제
  var data = { isLogined: req.session.login, userLogined: req.session.name };
  console.log("session 객체 확인(home) :", req.session);
  if (!req.session.login) {
    //로그인 실패시 홈화면 (기본 홈화면)
    console.log("session 객체 확인(home-logout) :", req.session);
    // res.render("partials/navbar", data);
    res.render("home");
  } else {
    //로그인 성공시 홈화면
    console.log("session 객체 확인(home-login) :", req.session);
    // res.render("partials/navbar", data);
    res.render("home");
  }
};

// 회원 가입 view 랜더링
exports.join = (req, res) => {
  if (req.session.login == true) {
    console.log("session 객체 확인(signup) :", req.session);
    res.send("<script>alert('이미 회원입니다. 새로운 회원을 등록하고 싶다면 로그아웃을 먼저 진행해주세요.');location.href='/home';</script>");
  } else {
    res.render("signup");
  }
};

// 로그인 view 랜더링
exports.login = (req, res) => {
  res.render("login");
};

// 로그인 실패 시 view 랜더링

// 로그아웃 시 view 랜더링
