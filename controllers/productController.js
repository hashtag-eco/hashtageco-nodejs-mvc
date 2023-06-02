const db = require("../models/index"),
  Product = db.product,
  Op = db.Sequelize.Op;



exports.product = (req, res) => {
  res.render("product");
};

//제로웨이스트 상품 목록 가져오는 함수
exports.getZeroWasteProduct = async (req, res) => {
  console.log("controller함수 안");
  try {
    const zwlist = await Product.findAll({
      attributes : ['product_id', 'product_name', 'image_link', 'price', 'brand'],
      //where : {}
    })
    console.log(zwlist);
    console.log("데이터받아옴");
    res.render("productByCategory/zerowasteProduct", {list : zwlist});
  }catch (err) {
    return err;
  };
};

exports.lowCarbonProduct = (req, res) => {
  res.render("productByCategory/lowCarbonProduct");
};

exports.upcyclingProduct = (req, res) => {
  res.render("productByCategory/upcyclingProduct");
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
