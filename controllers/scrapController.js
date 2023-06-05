exports.productscrap = function (req, res) {
  console.log("session 객체 확인(productscrap) :", req.session);
  if (req.session.login == true) {
    res.render("productscrap");
  } else {
    res.send("<script>alert('로그인을 먼저 해주세요.');location.href='/home';</script>");
  }
};

exports.mapscrap = function (req, res) {
  console.log("session 객체 확인(productscrap) :", req.session);
  if (req.session.login == true) {
    res.render("mapscrap");
  } else {
    res.send("<script>alert('로그인을 먼저 해주세요.');location.href='/home';</script>");
  }
};
