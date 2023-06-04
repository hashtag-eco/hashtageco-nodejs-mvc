const db = require("../models/index");
//db.sequelize.sync(); // 모델 동기화. 모델 없을 때만 새로 만듦.
const ZProduct = db.zproduct,
  UProduct = db.ucProduct,
  LProduct = db.lcProduct,
  Op = db.Sequelize.Op;



exports.product = (req, res) => {
  res.render("product");
};

//제로웨이스트 상품 목록 가져오는 함수
exports.getZeroWasteProduct = async (req, res) => {
  console.log("controller함수 안");
  //console.log(req.params.page);
  let pageNum = req.params.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 21 *(pageNum - 1); 
  }
  try {
    const zwlist = await ZProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 21
      //where : {}
    })
    //console.log(zwlist);
    console.log("데이터받아옴");
    res.render("productByCategory/zerowasteProduct", {list : zwlist});
  }catch (err) {
    return err;
  };
};

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
        //console.log(zwdetail);
        detailresult = zwdetail;
        break;
        //res.render("productDetail", {pdetails: zwdetail});
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
        //res.render("productDetail", {pdetails: updetail});
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
        //res.render("productDetail", {pdetails: lcdetail});
      }

      console.log(detailresult);
    }
    res.render("productDetail", {pdetails: detailresult});
  }catch (err) {
    return err;
  };
}

// exports.goZeroWasteProductDetail = async (req, res) => {
//   try {
//     console.log("11");
//     console.log(req.params);
//     console.log(req.params.detailId);
//     const id = req.params.detailId;
//     //console.log(id);
//     console.log("a1");
//     const zwdetail = await ZProduct.findAll({
//       attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
//       where: {
//         product_id: id
//       }
//     })
//     console.log(zwdetail);
//     res.render("productDetail", {pdetails: zwdetail});
//   }catch (err) {
//     return err;
//   };
// };

//저탄소 상품 목록 가져오는 함수
exports.getLowCarbonProduct = async(req, res) => {
  console.log("controller함수 안");
  let pageNum = req.query.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 15 *(pageNum - 1); 
  }
  try {
    const lclist = await LProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 15
      //where : {}
    })
    //console.log(lclist);
    console.log("데이터받아옴");
    res.render("productByCategory/lowCarbonProduct", {list: lclist});
  }catch (err) {
    return err;
  };
};

//업사이클링 상품 목록 가져오는 함수
exports.getUpcyclingProduct = async(req, res) => {
  console.log("controller함수 안");
  let pageNum = req.query.page; // 요청 페이지 넘버
  let offset = 0;
  if(pageNum > 1) {
    offset = 15 *(pageNum - 1); 
  }
  try {
    const ulist = await UProduct.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      offset: offset,
      limit: 15
      //where : {}
    })
    //console.log(ulist);
    console.log("데이터받아옴");
    res.render("productByCategory/upcyclingProduct", {list: ulist});
  }catch (err) {
    return err;
  };
};


exports.productdetail = (req, res) => {
  res.render("productdetail");
};

//카테고리별로 상품 보여주도록 함
// exports.respondWithCategory = (req, res) => {
//   let paramsCategory = req.params.category;
//   //product.ejs를 랜더링할 때 변수 category를 product.ejs에 넘겨줌
//   // -> product.ejs에서 <% category %> 로 접근 가능해짐
//   switch (category) {
//     case 'zeroWaste' :
//       res.render("product", { category: paramsCategory});
//   }
//   res.render("product", { category: paramsCategory});
// };

// exports.respondWithCategorySelect = (req, res) => {

// }
