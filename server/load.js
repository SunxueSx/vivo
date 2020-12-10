module.exports = (function () {
    var mysql = require("mysql");
    return function (req, res, shoppingList, goodlist, data, username, password) {
        loadData(function(msg){
            res.write(JSON.stringify(msg));
            res.end();
        });
    }
    
    function loadData(fn){
        let conn = mysql.createConnection({
            host: 'localhost',             
            user: "root",                 
            password: "root",              
            database: "vivo"             
          });
         
          conn.connect();
      
          var sql = "SELECT * FROM goods";
        
          conn.query(sql, function (err, result) {
            if (!err) {
              // console.log('数据成功：', result);
              fn({ code: 200, msg: "数据成功",data: result});
            } else {
              console.log('数据库访问失败：', err);
            }
          });
         
          conn.end();
    }
})();