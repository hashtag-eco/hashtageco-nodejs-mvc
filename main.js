const port = 3000;
const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  bodyParser = require("body-parser"),
  http = require("http").createServer(app),
  // controllers 호출
  homeController = require("./controllers/homeController"),
  productController = require("./controllers/productController"),
  mapController = require("./controllers/mapController"),
  userController = require("./controllers/userController"),
  scrapController = require("./controllers/scrapController");

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// public 경로 지정
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 레이아웃 사용
app.use(layouts);

// 포트 : 3000
app.listen(port, () => {
  console.log(`Listeninig to port ${port}`);
});

// 라우트 정리
app.get("/", homeController.home);
app.get("/home", homeController.home);
app.get("/product", productController.product);
app.get("/productdetail", productController.productdetail);
app.get("/map", mapController.map);
app.get("/signup", userController.signup);
app.get("/login", userController.login);
app.get("/profile", userController.profile);
app.get("/productscrap", scrapController.productscrap);
app.get("/mapscrap", scrapController.mapscrap);
