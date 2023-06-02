const models = require("../models/index"),
  Member = db.member;
Op = models.Sequelize.Op;

exports.signup = async (req, res) => {
  // 회원가입 함수
  models.res.render("signup");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.profile = (req, res) => {
  res.render("profile");
};
