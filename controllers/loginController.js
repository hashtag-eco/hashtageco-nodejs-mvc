const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

/*로그인*/
exports.login = async (res, req) => {
  console.log("로그인 검사");
  db.member
    .findOne({
      where: { email: req.body.email, password: req.body.password },
    })
    .then(function (user) {
      if (user == null) {
        // 로그인 실패 시 (user가 member 객체가 아니라면)
        console.log("로그인 실패");
        res.send("<script>alert('일치하는 회원정보가 없습니다. 다시 시도해주세요.');location.href='/login';</script>");
      } else {
        // 로그인 성공 시 (user가 member 객체라면 session.num값 부여)
        // 아래 if-else 문은 사용자가 이 페이지에 몇번이나 들어왔는지 보여주는 것임
        if (req.session.view == undefined) {
          req.session.view = 1;
        } else {
          req.session.view++;
        }
        req.session.login = true; // 로그인 true
        req.session.idx = user.dataValues.member_id; // member_id가 유지될 수 있도록 idx를 설정
        console.log("session 객체 확인(login) :", req.session);
        console.log("로그인 성공");
        // res.send("<script>alert('로그인에 성공하였습니다.');location.href='/home';</script>");
        req.session.save((err) => {
          if (err) throw err;
          res.send("<script>alert('로그인에 성공하였습니다.');location.href='/home';</script>");
        });
      }
    });
};

/*로그아웃*/
exports.logout = function (req, res) {
  console.log("session 객체 확인(logout1) :", req.session);
  if (req.session.login == true) {
    req.session.login = false;
    req.session.idx = -1; // 가지고 있던 사용자 id 버리기
    req.session.save(function () {
      console.log("session 객체 확인(logout2) :", req.session);
      console.log("로그아웃 성공");
      res.send("<script>alert('로그아웃에 성공하였습니다.');location.href='/home';</script>");
    });
  } else {
    res.send("<script>alert('로그인을 먼저 해주세요.');location.href='/home';</script>");
  }
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
