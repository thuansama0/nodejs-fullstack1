const mysql = require("mysql2");
const dotenv = require("dotenv");
//cau hinh ket noi database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "hoidanit",
});
// const connection = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.DB_PORT || 3307,
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "123456",
//   database: process.env.DB_NAME || "hoidanit",
//   waitForConnections: true, // hien thi ket noi doi khi het ket noi
//   connectionLimit: 10,
//   queueLimit: 0// khong gioi han so luong ket noi doi
// });
 module.exports = connection;