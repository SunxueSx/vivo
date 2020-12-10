module.exports = (function () {
  var mysql = require("mysql");

  return function (req, res, shoppingList, goodlist, data, username, password) {
    var username = username;
    var password = password;
    queryData(username, password, function (msg) {
      res.write(JSON.stringify(msg));
      res.end();
    });
  }

  function queryData(username, password, fn) {
    //1.创建链接
    let conn = mysql.createConnection({
      host: 'localhost',
      user: "root",
      password: "root",
      database: "vivo"
    });
    //2.建立链接
    conn.connect();

    var userName = username;
    var passWord = password;
 
    // var sql = "SELECT * FROM user";
   var sql = "select username,password from user where username = '"+userName+"' and password = '"+passWord+"'";
    conn.query(sql, function (err, result) {
      if (!err) {
        console.log('存在此用户：', result);
        fn({code:200,msg:"登录成功"});
      } else {
        console.log('用户不存在：', err);
      }
    });
    //4.断开链接
    // conn.end();
  }
})();