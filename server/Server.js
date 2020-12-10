module.exports = (function() {

    var shoppingList = [];
    var http = require("http");
    var req, res;
    var data = "";
    var route;
    var goodlist;

    function createHandler(_req, _res) {
        req = _req;
        res = _res;
        req.on("data", ondataHandler);
        req.on("end", onendHandler);
    }

    function ondataHandler(_data) {
        data = _data + "";
    }

    function onendHandler() {
        //res.writeHeader(）写在首行，不然会报错
        res.writeHeader(200, {
            "content-type": "text/html;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
        })
        var url
        if (req.url.indexOf("?") > -1) url = req.url.split("?")[0];
        else url = req.url;
        // req.url就是端口号后面开始的部分
        url = url.slice(1).toLowerCase();
        // console.log(url);
        try {
            data = JSON.parse(data);
            // console.log(data);
        } catch (e) {
            if (url !== "goodlist" && url !== "shoppinglist" && url !== "load" && url !== "update") {
                res.end("错误的数据");
                return;
            }
        }
        var username = data["username"];
        var password = data["password"];
        loadGoodsData(url, req, res, shoppingList, goodlist, data, username, password);
    }

    function loadGoodsData(url, req, res, shoppingList, goodlist, data, username, password) {
        var mysql = require("mysql");
        let conn = mysql.createConnection({
            host: 'localhost',
            user: "root",
            password: "root",
            database: "vivo"
        });

        conn.connect();

        var sql = "SELECT * FROM goods";

        conn.query(sql, function(err, result) {
            if (!err) {
                console.log('服务器加载商品数据成功');
                goodlist = result;
                route[url](req, res, shoppingList, goodlist, data, username, password);
            } else {
                console.log('数据库访问失败：', err);
            }
        });

        conn.end();
    }
    return function(_route) {
        route = _route;
        var server = http.createServer(createHandler);
        server.listen(4006, "10.9.65.252", function() {
            console.log("开启服务");
        });
    }
})();