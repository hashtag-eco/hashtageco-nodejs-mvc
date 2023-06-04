const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

/*로그인*/
exports.login = async (res, req) => {
  var responseData;
  console.log("로그인 검사");
  console.log("session 객체 확인(login) :", req.session);
  db.member
    .findOne({
      where: { email: req.body.email, password: req.body.password },
    })
    .then(function (user) {
      if (user == null) {
        // user가 member 객체가 아니라면
        console.log("로그인 실패");
        res.send("<script>alert('일치하는 회원정보가 없습니다. 다시 시도해주세요.');location.href='/login';</script>");
      } else {
        //user가 member 객체라면 session.num값 부여
        if (req.session.num == undefined) {
          req.session.num = 1;
          // console.log("Views :", req.session.num);
        } else {
          req.session.num++;
          // console.log("Views :", req.session.num);
        }
        req.session.login = true; // 로그인 true
        req.session.idx = user.dataValues.member_id; // member_id가 유지될 수 있도록 idx를 설정
        // responseData = '<a href="login" class="nav-link link-dark px-2">Login</a>';
        console.log("req.session :", req.session);
        console.log("로그인 성공");
        res.send("<script>alert('로그인에 성공하였습니다.');location.href='/home';</script>");
      }
    });
};

/*
exports.login = async (res, req) => {
  db.member
    .findOne({
      where: { email: req.body.email, password: req.body.password },
    })
    .then(function (user) {
      if (user == null) {
        // 회원이 아니라면 (user가 member 객체가 아니라면)
        console.log("로그인 실패");
        res.send("<script>alert('일치하는 회원정보가 없습니다. 다시 시도해주세요.');location.href='/login';</script>");
      } else {
        // 회원이라면 (user가 member 객체라면 session.num값 부여)
        req.session.is_logined = true;
        req.session.idx = user.dataValues.member_id;
        console.log(req.session);
        console.log("로그인 성공");
        res.send("<script>alert('로그인에 성공하였습니다.');location.href='/home';</script>");
        // res.redirect('/');
      }
    });
};
*/

/*로그아웃*/
exports.logout = function (req, res) {
  console.log("req.session :", req.session);
  req.session = null;
  console.log("req.session.login :", req.session.login, ", req.session.idx :", req.session.idx);
  console.log("로그아웃 성공");

  res.send("<script>alert('로그아웃에 성공하였습니다.');location.href='/home';</script>");
};

/*로그인 사용자 상품 스크랩 리스트*/
// 아직 수정 중
// const getProductList = async (id) => {
//   try {
//     const ProductList = await member.findAll({
//       attributes: ["Name", "color"],
//       where: {
//         member_id: id,
//       },
//     });
//     return ProductList;
//   } catch (err) {
//     return err;
//   }
// };

/*로그인 사용자 스토어 스크랩 리스트*/
// 아직 수정 중
// const getStoreList = async (id) => {
//   try {
//     const StoreList = await member.findAll({
//       attributes: ["Name", "color"],
//       where: {
//         member_id: id,
//       },
//     });
//     return StoreList;
//   } catch (err) {
//     return err;
//   }
// };
