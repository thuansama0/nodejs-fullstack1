require("dotenv").config(); // impost de sai dung bien moi truong tu file .env
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine"); //import ham cau hinh view engine
const webRoutes = require("./routes/web"); //import route web
const mysql = require("mysql2");
const app = express();
const connection = require("./config/database"); //import cau hinh ket noi database

console.log(">>> check evn:", process.env);
const port = process.env.PORT || 3000; //3000
const hostname = process.env.HOST_NAME || "localhost"; //"localhost"
//config template engine
configViewEngine(app); // goi ham cau hinh view engine
// khai bao su dung route
app.use("/", webRoutes);
//cau hinh ket noi database

//thuc hien ket noi
connection.query(
  'select * from Users', 
  function (err, results, fields) {
    console.log(">>>results", results); // ket qua tra ve sau khi thuc hien cau truy van
   // console.log(">>>fields", fields); // thong tin ve truong du lieu
});
app.listen(port, hostname, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
