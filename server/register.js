module.exports = (function () {
  var mysql = require("mysql");

  return function (req,res,shoppingList,goodlist,data,username,password) {
    var username = username;
    var password = password;
    saveData(username, password, function (msg) {
      res.write(JSON.stringify(msg));
      res.end();
    });
  }

  function saveData(username, password, fn) {
    //1.创建链接
    let conn = mysql.createConnection({
      host: 'localhost',             
      user: "root",                 
      password: "root",              
      database: "vivo"             
    });
    //2.建立链接
    conn.connect();

    let sql = `insert into user (username,password) values ('${username}','${password}');`;
   
    //参数一：sql语句  参数二:回调函数
    conn.query(sql, function (err, result) {
      if (!err) {
        console.log('数据库访问成功：', result);
        fn({ code: 200, msg: "注册成功" });
      } else {
        console.log('数据库访问失败：', err);
      }
    });
    //4.断开链接
    conn.end();
  }
})();