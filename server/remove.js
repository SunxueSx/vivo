module.exports=(function(){
    return function(req,res,shoppingList,goodlist,data){
        data.forEach(item=>{
            var index=shoppingList.reduce((value,t,i)=>{
                if(t.id===item) value=i;
                return value;
            },-1);
            if(index>-1){
                shoppingList.splice(index,1);
            }
        })
        res.write(JSON.stringify({
            type:"remove",
            list:shoppingList
        }));
        res.end();
    }
})();