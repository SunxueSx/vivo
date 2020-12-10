var server=require("./Server");
var route={
    login:require("./login"),
    register:require("./register"),
    goodlist:require("./goodList"),
    shoppinglist:require("./shoppingList"),
    add:require("./add"),
    update:require("./update"),
    remove:require("./remove"),
    select:require("./select"),
    load:require("./load"),
    savegoodslist:require("./SaveGoodsList"),
}
server(route);
