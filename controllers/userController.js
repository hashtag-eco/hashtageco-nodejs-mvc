const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signup = async (req, res) => {
  // 회원 가입
  res.render("signup");
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
      res.send("<script>alert('회원가입이 완료되었습니다.');</script>");
      res.render("home");
    })
    .catch((err) => {
      console.log(err);
      console.log("회원가입 실패");
      res.send("<script>alert('이미 사용중인 이메일입니다.');location.href='/user/signUp';</script>");
    });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.profile = (req, res) => {
  res.render("profile");
};
