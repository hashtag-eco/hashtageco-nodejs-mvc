"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize; //인스턴스
db.Sequelize = Sequelize; //라이브러리

db.zproduct = require("./ZerowasteProduct.js")(sequelize, Sequelize);
db.ucProduct = require("./UcProduct.js")(sequelize, Sequelize);
db.lcProduct = require("./LProduct.js")(sequelize, Sequelize);
db.member = require("./member.js")(sequelize, Sequelize);
db.productScrap = require("./ProductScrap.js")(sequelize, Sequelize);
db.store = require("./Store.js")(sequelize, Sequelize);

db.Zwproductscrap = require("./Zwproductscrap.js")(sequelize, Sequelize);
db.Uproductscrap = require("./Uproductscrap.js")(sequelize, Sequelize);
db.Lcproductscrap = require("./Lcproductscrap.js")(sequelize, Sequelize);


//관계 정의
// db.zproduct.belongsToMany(db.member, {through: 'ZProductScrap', foreignKey: 'product_id'} )
// db.member.belongsToMany(db.zproduct, {through: 'ZProductScrap', foreignKey: 'member_id'}); //member와 product는 다대다 관계이다.
db.member.belongsToMany(db.zproduct, { through: 'Zwproductscrap' , foreignKey: 'member_id'});
//db.Zwproductscrap.belongsTo(db.member, {foreignKey: 'member_id'});
db.zproduct.belongsToMany(db.member, {through: 'Zwproductscrap', foreignKey: 'product_id'});
//db.Zwproductscrap.belongsTo(db.zproduct, {foreignKey: 'product_id'});





module.exports = db;