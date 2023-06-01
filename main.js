require("dotenv").config();
const port = 3000;
const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  bodyParser = require("body-parser"),
  http = require("http").createServer(app),
  errorController = require("./controllers/errorController"),
  //Router 모듈 사용
  home = require("./routes/homeRoute"),
  map = require("./routes/mapRoute"),
  product = require("./routes/productRoute"),
  productdetail = require("./routes/productDetailRoute"),
  productscrap = require("./routes/productScrapRoute"),
  mapscrap = require("./routes/mapScrapRoute"),
  user = require("./routes/userRoutes");

app.set("view engine", "ejs");

// public 경로 지정
app.use(express.static(`${__dirname}/public`));

//기본 미들웨어 함수로 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 레이아웃 사용
app.use(layouts);

//라우터 호출
app.use("/", home);
app.use("/home", home);
app.use("/map", map);
app.use("/product", product);
app.use("/productdetail", productdetail);
app.use("/productscrap", productscrap);
app.use("/mapscrap", mapscrap);
app.use("/user", user);

//에러 처리 위한 미들웨어 사용
app.use(errorController.logErrors);

// 포트 : 3000
app.listen(port, () => {
  console.log(`Listeninig to port ${port}`);
});

// 라우트 정리 - 라우트폴더에 정리함
// app.get("/", homeController.home);
// app.get("/home", homeController.home);
// app.get("/product", productController.product);
// app.get("/productdetail", productController.productdetail);
// app.get("/map", mapController.map);
// app.get("/signup", userController.signup);
// app.get("/login", userController.login);
// app.get("/profile", userController.profile);
// app.get("/productscrap", scrapController.productscrap);
// app.get("/mapscrap", scrapController.mapscrap);
