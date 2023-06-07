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

//멤버와 상품은 다대다 관계입니다.
//제로웨이스트 상품
db.member.belongsToMany(db.zproduct, {
        through: 'Zwproductscrap', //스크랩테이블을 연결 테이블로 설정합니다.
        foreignKey: 'member_id'
});
db.zproduct.belongsToMany(db.member, {
        through: 'Zwproductscrap',
        foreignKey: 'product_id'
});
db.Zwproductscrap.belongsTo(db.zproduct, { //연결테이블인 스크랩테이블은 상품, 멤버 테이블과 각각 일대일 관계입니다.
        foreignKey: 'product_id'
});
db.Zwproductscrap.belongsTo(db.member, {
        foreignKey: 'member_id'
});

//나머지 두 카테고리의 상품과 멤버에 대해서도 동일한 방식으로 연결해줍니다.
//저탄소 상품
db.member.belongsToMany(db.lcProduct, {
        through: 'Lcproductscrap', //스크랩테이블을 연결 테이블로 설정합니다.
        foreignKey: 'member_id'
});
db.lcProduct.belongsToMany(db.member, {
        through: 'Lcproductscrap',
        foreignKey: 'product_id'
});
db.Lcproductscrap.belongsTo(db.lcProduct, { //연결테이블인 스크랩테이블은 상품, 멤버 테이블과 각각 일대일 관계입니다.
        foreignKey: 'product_id'
});
db.Lcproductscrap.belongsTo(db.member, {
        foreignKey: 'member_id'
});

//업사이클링 상품
db.member.belongsToMany(db.ucProduct, {
        through: 'Uproductscrap', //스크랩테이블을 연결 테이블로 설정합니다.
        foreignKey: 'member_id'
});
db.ucProduct.belongsToMany(db.member, {
        through: 'Uproductscrap',
        foreignKey: 'product_id'
});
db.Uproductscrap.belongsTo(db.ucProduct, { //연결테이블인 스크랩테이블은 상품, 멤버 테이블과 각각 일대일 관계입니다.
        foreignKey: 'product_id'
});
db.Uproductscrap.belongsTo(db.member, {
        foreignKey: 'member_id'
});

module.exports = db;