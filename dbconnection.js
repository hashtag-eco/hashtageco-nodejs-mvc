require('dotenv').config();
//설치한 mysql 모듈 불러오기
const mysql = require('mysql2/promise');

//연결 설정 셋팅
const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        waitForConnections: true,
        insecureAuth: true
});

module.export= db;