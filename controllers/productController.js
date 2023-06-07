const Lcproductscrap = require("../models/Lcproductscrap");
const db = require("../models/index");
db.sequelize.sync(); // 모델 동기화. 모델 없을 때만 새로 만듦.
const ZProduct = db.zproduct,
  UProduct = db.ucProduct,
  LProduct = db.lcProduct,
  ZproductScrap = db.Zwproductscrap,
  LproductScrap = db.Lcproductscrap,
  UproductScrap = db.Uproductscrap,
  Member = db.member,
  Op = db.Sequelize.Op;

exports.product = (req, res) => {
  res.render("product");
};

//제로웨이스트 상품 목록 불러오기
exports.getZeroWasteProduct = async (req, res) => {
  console.log("session 객체 확인(product) :", req.session);
  console.log("controller함수 안");
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if (pageNum > 1) {
    offset = 27 * (pageNum - 1);
  }
  try {
    const zwlist = await ZProduct.findAll({
      attributes: ["product_id", "product_name", "image_link", "price", "brand", "url_link"],
      offset: offset,
      limit: 27,
    });
    console.log("데이터받아옴");
    res.render("productByCategory/zerowasteProduct", { list: zwlist });
  } catch (err) {
    return err;
  }
  // console.log(req.session);
};

//저탄소 상품 목록 가져오는 불러오기
exports.getLowCarbonProduct = async (req, res) => {
  console.log("controller함수 안");
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if (pageNum > 1) {
    offset = 27 * (pageNum - 1);
  }
  try {
    const lclist = await LProduct.findAll({
      attributes: ["product_id", "product_name", "image_link", "price", "brand"],
      offset: offset,
      limit: 27,
    });
    //console.log(lclist);
    console.log("데이터받아옴");
    res.render("productByCategory/lowCarbonProduct", { list: lclist });
  } catch (err) {
    return err;
  }
};

//업사이클링 상품 목록 불러오기
exports.getUpcyclingProduct = async (req, res) => {
  console.log("controller함수 안");
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if (pageNum > 1) {
    offset = 27 * (pageNum - 1);
  }
  try {
    const ulist = await UProduct.findAll({
      attributes: ["product_id", "product_name", "image_link", "price", "brand"],
      offset: offset,
      limit: 27,
    });
    //console.log(ulist);
    console.log("데이터받아옴");
    res.render("productByCategory/upcyclingProduct", { list: ulist });
  } catch (err) {
    return err;
  }
};

//상품상세페이지 불러오기
exports.goProductDetail = async (req, res) => {
  const pid = req.params.productId;
  let detailresult;
  console.log(req.params.category);
  try {
    switch (req.params.category) {
      case "zerowaste": {
        console.log("zw");
        const zwdetail = await ZProduct.findAll({
          attributes: ["product_id", "product_name", "image_link", "price", "brand", "url_link", "category1", "category2", "mall_name"],
          where: {
            product_id: pid,
          },
        });
        detailresult = zwdetail;
        break;
      }

      case "upcycling": {
        console.log("up");
        const updetail = await UProduct.findAll({
          attributes: ["product_id", "product_name", "image_link", "price", "brand", "url_link", "category1", "category2", "mall_name"],
          where: {
            product_id: pid,
          },
        });
        detailresult = updetail;
        break;
      }

      case "lowcarbon": {
        console.log("low");
        const lcdetail = await LProduct.findAll({
          attributes: ["product_id", "product_name", "image_link", "price", "brand", "url_link", "category1", "category2", "mall_name"],
          where: {
            product_id: pid,
          },
        });
        detailresult = lcdetail;
        break;
      }

      // console.log(detailresult);
    }
    res.render("productDetail", { pdetails: detailresult });
  } catch (err) {
    return err;
  }
};

//제로웨이스트 상품스크랩 등록
exports.updateScrap = async (req, res) => {
  const uid = req.session.idx; //세션을 통해 받아온 로그인한 유저의 id

  //유저의 id와 fetch api의 요청으로 들어온 req.body.scrapItemId를 데이터로 갖는 row 생성
  db.Zwproductscrap.create({
    member_id: uid,
    product_id: parseInt(req.body.scrapItemId),
  });

  //상품의 scrap 버튼의 텍스트가 scraped로 바뀌게 하기 위해 응답 보냄
  var responseData = { state: "scraped" };
  res.json(responseData);
};

//회원의 제로웨이스트 상품스크랩 목록 구하는 함수
const getScrapList = async (uid) => {
  //인자 uid는 세션의 멤버 아이디
  try {
    //세션의 멤버id
    const ZscrapList = await ZProduct.findAll({
      attributes: ["product_id", "product_name", "price", "image_link", "mall_name", "category1", "category2"], //구하고자 하는 칼럼
      //include통해 Member테이블과 연결
      include: {
        model: Member, //model로 연결할 테이블 정의합니다.
        where: { member_id: uid }, //멤버아이디가 세션아이디인 row만 선택합니다.
        through: { attributes: [] }, //연결테이블(ZProductScrap)정보 생략
      },
    });
    console.log(ZscrapList);
    return ZscrapList;
  } catch (err) {
    return err;
  }
};

//상품스크랩 삭제
exports.deleteProductScrap = async (req, res) => {
  const uid = req.session.idx;
  console.log("상품스크랩컨트롤러 안");
  try {
    //삭제할 아이템이 제로웨이스트 상품인 경우
    if (req.body.category == "zerowaste") {
      await ZproductScrap.destroy({
        //member_id와 product_id를 조건으로 destroy합니다.
        where: {
          member_id: uid,
          product_id: parseInt(req.body.scrapItemId),
        },
      });
    }
    //삭제할 아이템이 저탄소 상품인 경우
    else if (req.body.category == "lowcarbon") {
      await LproductScrap.destroy({
        //member_id와 product_id를 조건으로 destroy합니다.
        where: {
          member_id: uid,
          product_id: parseInt(req.body.scrapItemId),
        },
      });
    }
    //삭제할 아이템이 업사이클링 상품인 경우
    else {
      await UproductScrap.destroy({
        //member_id와 product_id를 조건으로 destroy합니다.
        where: {
          member_id: uid,
          product_id: parseInt(req.body.scrapItemId),
        },
      });
    }
  } catch (err) {
    return err;
  }
  console.log("del ok");
  const newList = await getScrapList(uid);

  res.render("productscrap", { scrapList: newList });
};

//회원의 상품 스크랩 보여주기
exports.showProductScrap = async (req, res) => {
  const uid = req.session.idx;
  const scrapList = await ZProduct.findAll({
    attributes: ["product_id", "product_name", "price", "image_link", "mall_name", "category", "category1", "category2", "url_link"], //구하고자 하는 칼럼
    //include통해 Member테이블과 연결
    include: {
      model: Member, //model로 연결할 테이블 정의합니다.
      where: { member_id: uid }, //멤버아이디가 세션아이디인 row만 선택합니다.
      through: { attributes: [] }, //연결테이블(ZProductScrap)정보 생략
    },
  });
  console.log(scrapList);
  res.render("productscrap", { scrapList: scrapList });
};
