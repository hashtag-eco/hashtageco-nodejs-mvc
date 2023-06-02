db = require("../dbconnection")

exports.product = (req, res) => {
  res.render("product");
};

exports.zeroWasteProduct = (req, res) => {
  //let data = 
  //res.render("product", {items : data});
  res.render("/productByCategory/zeroWasteProduct");
};

exports.lowCarbonProduct = (req, res) => {
  res.render("/productByCategory/lowCarboneProduct");
};

exports.upcyclingProduct = (req, res) => {
  res.render("/productByCategory/upcyclingProduct");
};


exports.productdetail = (req, res) => {
  res.render("productdetail");
};

//카테고리별로 상품 보여주도록 함
exports.respondWithCategory = (req, res) => {
  let paramsCategory = req.params.category;
  //product.ejs를 랜더링할 때 변수 category를 product.ejs에 넘겨줌
  // -> product.ejs에서 <% category %> 로 접근 가능해짐
  switch (category) {
    case 'zeroWaste' :
      res.render("product", { category: paramsCategory});
  }
  res.render("product", { category: paramsCategory});
};

exports.respondWithCategorySelect = (req, res) => {

}
