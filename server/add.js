module.exports=(function(){
    function search(list,data){
       
      return  list.reduce((value,item)=>{
            if(item.id==data.id) value=item;
            return value;
        },null);
    }

    return function(req,res,shoppingList,goodlist,data,username,password){
        
        var o=search(shoppingList,data);
        console.log(o);
        if(!o){
            var t=search(goodlist,data);
            if(!t){
                res.end("数据不存在");
                return;
            }
            shoppingList.push({
                id: t.id,
                checked: false,
                icon: t.saleGoodsImg,
                name: t.name,
                price: t.price,
                num: 1,
                discount:"0.00",
                grade:t.price,
                total: t.price,
                deleted: false,
                info: "",
            });
        }else{
            o.num++;
            o.total=o.num*o.price;
            o.grade=o.num*o.price;
        }
     
        res.write(JSON.stringify({
            type:"add",
            list:shoppingList
        }));
        res.end();
    }
})();