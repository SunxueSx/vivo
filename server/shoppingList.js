module.exports=(function(){
    return function(req,res,shoppingList,goodlist){
        var obj={
            type:"shoppingList",
            list:shoppingList
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
})();