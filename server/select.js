module.exports=(function(){
    return function(req,res,shoppingList,goodlist,data){
        data.forEach(item=>{
            console.log(item.select);
            shoppingList.forEach(t=>{
                if(t.id===item.id) t.checked=item.select;
            })
        })
        console.log(shoppingList);
        res.write(JSON.stringify({
            type:"select",
            list:shoppingList
        }));
        res.end();
    }
})();