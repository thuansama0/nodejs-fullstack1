const express = require("express");
const router = express.Router();
const{getHomepage,getTest,getThuan,postCreateUser} = require("../controllers/homeController");

//route.Method(duong dan, callback)
// khai bao route cho trang chu
router.get("/",getHomepage ); 
router.get("/test",getTest);
router.get("/thuan",getThuan);
router.post("/create-user", postCreateUser); 
module.exports = router; // export router ra ngoai de su dung trong file khac