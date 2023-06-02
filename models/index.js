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

db.product = require("./Product.js")(sequelize, Sequelize);
db.member = require("./member.js")(sequelize, Sequelize);

module.exports = db;
