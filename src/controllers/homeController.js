const connection= require("../config/database");

// const getHomepage = (req, res) => {
  
//   connection.query(
//     "select * from Users", 
//     function (err, results, fields) {
//       users =results;
//       console.log(">>>results", results); // ket qua tra ve sau khi thuc hien cau truy van
//       //console.log(">>>check users:", users);
//       res.send(JSON.stringify(users));
//     }
// );
  const getHomepage= (req, res) => {
    return res.render("home.ejs");

}
const getTest= (req, res) => {
  res.send("<h1>Đây là trang test</h1>");
}
const getThuan= (req, res) => {
  res.render("sample.ejs");
}
const postCreateUser= (req, res) => {
  res.send("create a new user");
}


module.exports = {
    getHomepage, getTest, getThuan, postCreateUser
}