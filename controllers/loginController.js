const db = require("../models/index"),
  member = db.member;
Op = db.Sequelize.Op;

/*로그인*/
exports.login = async (res, req) => {
  var responseData;
  console.log("로그인 검사");

  models.member
    .findOne({
      where: { memberMail: req.body.mail, password: req.body.pw },
    })
    .then(function (user) {
      if (user == null) {
        //user가 member객체가 아님.
        console.log("로그인 실패");
        res.send("<script>alert('사용자 정보가 일치하지 않습니다.');location.href='/login';</script>");
      } else {
        if (req.session.num == undefined) {
          req.session.num = 1;
        } else {
          req.session.num++;
        }

        console.log("@@@@@@@@@req.session.num", req.session.num);
        req.session.login = true; //로그인 ture
        req.session.idx = user.dataValues.member_id; //member_id가 유지될 수 있도록 idx를 설정해준다,
        responseData = { result: "ok", session: req.session.login };
        // getPtlist(req.session.idx).then((ptlist) => {
        //   console.log(ptlist);
        //   res.redirect("/");
        // });
        console.log("로그인 성공");
      }
    });
};

/*로그아웃*/
exports.logout = function (req, res) {
  console.log(req.session);
  req.session = null;
  console.log("로그아웃");
  res.send("<script>alert('로그아웃되었습니다');</script>");
  res.render("home");
};

/*로그인 사용자 상품 스크랩 리스트*/
// 아직 수정 중
const getProductList = async (id) => {
  try {
    const ProductList = await member.findAll({
      attributes: ["Name", "color"],
      where: {
        member_id: id,
      },
    });
    return ProductList;
  } catch (err) {
    return err;
  }
};

/*로그인 사용자 스토어 스크랩 리스트*/
// 아직 수정 중
const getStoreList = async (id) => {
  try {
    const StoreList = await member.findAll({
      attributes: ["Name", "color"],
      where: {
        member_id: id,
      },
    });
    return StoreList;
  } catch (err) {
    return err;
  }
};
