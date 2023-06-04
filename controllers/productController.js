const db = require("../models/index");
db.sequelize.sync(); // 모델 동기화. 모델 없을 때만 새로 만듦.
const ZProduct = db.zproduct,
  UProduct = db.ucProduct,
  LProduct = db.lcProduct,
  Op = db.Sequelize.Op;



exports.product = (req, res) => {
  res.render("product");
};

//제로웨이스트 상품 목록 불러오기
exports.getZeroWasteProduct = async (req, res) => {
  console.log("controller함수 안");
  //console.log(req.params.page);
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 27 *(pageNum - 1); 
  }
  try {
    const zwlist = await ZProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 27
      //where : {}
    })
    //console.log(zwlist);
    console.log("데이터받아옴");
    res.render("productByCategory/zerowasteProduct", {list : zwlist});
  }catch (err) {
    return err;
  };
};


//저탄소 상품 목록 가져오는 불러오기
exports.getLowCarbonProduct = async(req, res) => {
  console.log("controller함수 안");
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 27 *(pageNum - 1); 
  }
  try {
    const lclist = await LProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 27
      //where : {}
    })
    //console.log(lclist);
    console.log("데이터받아옴");
    res.render("productByCategory/lowCarbonProduct", {list: lclist});
  }catch (err) {
    return err;
  };
};

//업사이클링 상품 목록 불러오기
exports.getUpcyclingProduct = async(req, res) => {
  console.log("controller함수 안");
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 27 *(pageNum - 1); 
  }
  try {
    const ulist = await UProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 27
      //where : {}
    })
    //console.log(ulist);
    console.log("데이터받아옴");
    res.render("productByCategory/upcyclingProduct", {list: ulist});
  }catch (err) {
    return err;
  };
};

//상품상세페이지 불러오기
exports.goProductDetail = async (req, res) => {
  const pid = req.params.productId;
  let detailresult;
  console.log(req.params.category);
  try {
    switch(req.params.category) {
      case 'zerowaste': {
        console.log("zw");
        const zwdetail = await ZProduct.findAll({
          attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand', 'url_link', 'category1', 'category2', 'mall_name'],
          where: {
            product_id: pid
          }
        })
        detailresult = zwdetail;
        break;
      }

      case 'upcycling': {
        console.log("up");
        const updetail = await UProduct.findAll({
          attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand', 'url_link', 'category1', 'category2', 'mall_name'],
          where: {
            product_id: pid
          }
        })
        detailresult = updetail;
        break;
      }

      case 'lowcarbon': {
        console.log("low");
        const lcdetail = await LProduct.findAll({
          attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand', 'url_link', 'category1', 'category2', 'mall_name'],
          where: {
            product_id: pid
          }
        })
        detailresult = lcdetail;
        break;
      }

      // console.log(detailresult);
    }
    res.render("productDetail", {pdetails: detailresult});
  }catch (err) {
    return err;
  };
}



