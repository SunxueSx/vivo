module.exports=(function(){
    function search(list,data){
        return  list.reduce((value,item)=>{
              if(item.id===data.id) value=item;
              return value;
          },null);
      }
    return function(req,res,shoppingList,goodlist,data){
        var o=search(shoppingList,data);
        if(!o){
            res.end("数据错误");
            return;
        }
        o.num=data.num;
        o.total=o.num*o.price;
        res.write(JSON.stringify({
            type:"update",
            list:shoppingList
        }));
        res.end();
    }
})();