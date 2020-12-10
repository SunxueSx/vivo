module.exports = (function () {
  var mysql = require("mysql");

  return function (req, res, shoppingList, goodlist, data, username, password) {
    for (var i = 0; i < shoppingList.length; i++) {
      saveData(shoppingList[i], function (msg) {
        res.write(JSON.stringify(msg));
      });
    }
  }

  function saveData(shoppingList, fn) {
    var { id, name, price, icon, info, num, total, checked, deleted } = shoppingList;
    
    //1.创建链接
    let conn = mysql.createConnection({
      host: 'localhost',
      user: "root",
      password: "root",
      database: "vivo"
    });
    //2.建立链接
    conn.connect();

    var querySql = "select id from shoppingCart where id = '" + id + "'";
    conn.query(querySql, function (err1, result1) {
     
      if (result1.length > 0) {
        var updateSql = `update shoppingCart set num = '${num}',total ='${total}' where id = ${id}`;
        conn.query(updateSql, function (err2, result2) {
          if (!err2) {
            console.log('数据更新成功：', result2);
            fn({ code: 200, msg: "商品数据更新成功" });
          } else {
            console.log('数据更新失败：', err2);
          }
        });
      } else {
        let sql = `insert into shoppingCart (id,name,price,icon,info,num,total,checked,deleted) values ('${id}','${name}','${price}','${icon}','${info}','${num}','${total}','${checked}','${deleted}');`;
        //参数一：sql语句  参数二:回调函数
        conn.query(sql, function (err, result) {
          if (result) {
            console.log('数据存储成功：', result);
            fn({ code: 200, msg: "商品数据存储成功" });
          } else {
            console.log('数据存储失败：', err);
          }
        });
      }
    })
    //4.断开链接
    // conn.end();
  }
})();