const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

exports.signup = async (res, req) => {
  // 회원 가입
  db.member
    .create({
      // create
      member_id: req.body.member_id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
    })
    .then((result) => {
      console.log("회원가입 완료");
      res.send("<script>alert('회원가입을 완료했습니다.');<script>");
      res.render("home");
    })
    .catch((err) => {
      console.log(err);
      console.log("회원가입 실패");
      res.send("<script>alert('회원가입에 실패하였습니다.');</script>");
    });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.profile = (req, res) => {
  res.render("profile");
};
