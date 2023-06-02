exports.home = (req, res) => {
  res.render("home");
};

// 회원 가입 view
exports.join = (req, res) => {
  res.render("signup");
};
