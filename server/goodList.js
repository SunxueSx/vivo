module.exports=(function(){
    return function(req,res,shoppingList,goodlist){
        var obj={
            type:"goodList",
            list:goodlist
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
})();