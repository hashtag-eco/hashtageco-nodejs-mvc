// config/config.js : sequelize를 사용하기 위한 환경 설정

require("dotenv").config();
module.exports = {
  development: {
    username: "cc",
    password: "password",
    database: "eco_db",
    host: "34.64.151.238",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },
};
