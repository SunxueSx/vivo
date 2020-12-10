export default class Utils {
    static ids = 0;
    static randomColor() {
        var col = "#";
        for (var i = 0; i < 6; i++) {
            col += Math.floor(Math.random() * 16).toString(16);
        }
        return col;
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static ce(type, style, parent) {
        var elem = document.createElement(type);
        if (style) {
            for (var prop in style) {
                elem.style[prop] = style[prop];
            }
        }
        if (typeof parent === "string") parent = document.querySelector(parent);
        if (parent) parent.appendChild(elem);
        return elem;
    }
    static setStyle(styles) {
        var style = document.createElement("style");
        document.head.appendChild(style);
        var styleSheet = document.styleSheets[document.styleSheets.length - 1];
        for (var prop in styles) {
            Utils.addCss(styleSheet, prop, styles[prop]);
        }
    }
    static addCss(styleSheet, selector, style) {
        var str = selector + " {";
        for (var prop in style) {
            var value = style[prop]
            prop = prop.replace(/([A-Z])/g, function ($1) {
                return "-" + $1.toLowerCase();
            })
            str += prop + ":" + value + ";"
        }
        str += " }";
        styleSheet.insertRule(str, styleSheet.cssRules.length);
    }
    static getCookie (key) {
        // 取到所有cookie
        var str = document.cookie
        // 先按照; 来切开每一条cookie
        var arr = str.split('; ')
      
        // arr的每一个item就是一条cookie，再把item按照=来切割，把属性名和属性值分开
        var obj = {}
        arr.forEach(item => {
          var subArr = item.split('=')
          // subArr是切开之后的数组，这个数组的第0个元素是属性名，第一个元素是属性值
          // subArr[0] 这个整体作为obj的属性名，这里不能用. 只能用中括号
          // subArr[1]是编码之后的属性值，解码之后赋值
          obj[subArr[0]] = decodeURIComponent(subArr[1])
        })
       
        return obj[key]
      }
      static objectToString(obj){
            var str = "";
            for(var prop in obj){
                str+=prop = obj[prop]+";";
            }
            str = str.slice(0,str.length-1);
            return str;
      }
      static iconPath(itemData) {
        var miniIcon = itemData["icon"].split("-");
        var basePath = itemData["saleGoodsImg"].split("_")[0];
        for (var j = 0; j < miniIcon.length; j++) {
            miniIcon[j] = basePath + "_" + miniIcon[j] + "_750x750.png"
        }
        return miniIcon;
    }

    static search(goodsData, id) {
        for (var i = 0; i < goodsData.length; i++) {
            for (var prop in goodsData[i]) {
                if (goodsData[i][prop] == id) {
                    return goodsData[i];
                }
            }
        }
    }
    static CSStoString(str){
        return str.replace(/(?<=:)(.*?)(?=;)|-[a-z](?=.+:)|;/g,function(item){
             if(item===";") return ","
             if(item[0]==="-")  return item[1].toUpperCase();
             return "'"+item.trim()+"'";
         });
     }
 
     static CSStoObject(str){
         str=Utils.CSStoString(str);
        return  str.split(",").reduce((value,item)=>{
            item=item.replace(/\n/g,"");
             var arr=item.split(":");
             arr[0]=arr[0].replace(/\s/g,"");
             if(arr[1]===undefined) return value;
             arr[1]=arr[1].replace(/'/g,"");
             value[arr[0]]=arr[1];
             return value;
         },{})
     }
}