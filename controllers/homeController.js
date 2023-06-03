exports.home = (req, res) => {
  res.render("home");
};

// 회원 가입 view
exports.join = (req, res) => {
  res.render("signup");
};

// 로그인 view
exports.login = (req, res) => {
  res.render("login");
};
