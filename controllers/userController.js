const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

exports.signup = async (req, res) => {
  // 회원 가입
  db.member
    .create({
      // create
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
    })
    .then((result) => {
      console.log("회원가입 완료");
      res.render("home");
    })
    .catch((err) => {
      console.log(err);
      console.log("회원가입 실패");
      res.send("<script>alert('이미 사용중인 이메일입니다.');location.href='/signup';</script>");
    });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.profile = (req, res) => {
  res.render("profile");
};
