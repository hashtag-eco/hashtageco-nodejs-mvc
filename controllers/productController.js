db = require("../dbconnection")

exports.product = (req, res) => {
  res.render("product");
};

exports.productdetail = (req, res) => {
  res.render("productdetail");
};

exports.respondWithCategory = (req, res) => {
  let paramsCategory = req.params.category;
  res.render("product", { category: paramsCategory});
};

exports.respondWithCategorySelect = (req, res) => {
  
}
