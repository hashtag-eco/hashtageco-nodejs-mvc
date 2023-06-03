const db = require("../models/index"),
  Member = db.member,
  Sequelize = require("sequelize"),
  Op = db.Sequelize.Op;

// 홈 view 랜더링
exports.home = (req, res) => {
  res.render("home");
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
