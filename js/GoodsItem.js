import Utils from "./Utils.js";

export default class GoodsItem extends EventTarget{
   static GOODS_DATA_EVENT = "goods_data_event";
    constructor(_data,_style,_index){
        super();
        this.data = _data;
        this.style = _style;
        this.index=_index;
        this.elem = this.createElem();
       
    }
   
    createElem(){
        let div = Utils.ce("div");
        Object.assign(div.style,{
            width:this.style["width"]+"px",
            height:this.style["height"]+"px",
            position:"relative",
            backgroundColor:"#ffffff",
            float:"left",
            marginBottom: "10px",
            fontSize: 0,
            textAlign: "center",
            marginRight:this.index==2 || this.index==6 ||this.index==10?"0px":"9px",
        });

        this.fn = e => this.mouseHandler(e)
        div.addEventListener("mouseenter",this.fn );
        div.addEventListener("mouseleave",this.fn );
        div.addEventListener("click",this.fn);

        let a = Utils.ce("a",{
            display:"block",
            width:this.style["width"],
            textAlign:"center",
            cursor:"pointer",
        });
       
        let saleGoodsImg = Utils.ce("img",{
            width: this.style["imgWidth"],
            height: this.style["imgHeight"],
            margin: this.style["imgMargin"],
        });

        saleGoodsImg.setAttribute("src",`${this.data["saleGoodsImg"]}`);
        a.appendChild(saleGoodsImg);
        div.appendChild(a);

        let infoDiv = Utils.ce("div",{
            textAlign: "center",
        });
        let nameP = Utils.ce("p",{
            fontSize:this.style["nameFontSize"],
            textAlign:"center",
            color:"#333",
            lineHeight:"30px",
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis",
        });
        nameP.textContent = `${this.data["name"]}`;

        let descP = Utils.ce("p",{
            lineHeight: this.style["descHeight"],
            height: this.style["descHeight"],
            fontSize: this.style["descFontSize"],
            padding:this.style["descPadding"],
            color: "#333",
            textAlign:"center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        });
        descP.textContent = `${this.data["desc"]}`;
        
       
        let price = Utils.ce("p",{
            color: "#f51919",
            fontSize:"22px",
            textAlign:"center",
        });
        
        price.textContent ="¥"+ `${this.data["price"]}`;

        infoDiv.appendChild(nameP);
        infoDiv.appendChild(descP);
        infoDiv.appendChild(price);

        div.appendChild(infoDiv);
        return div;
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
    mouseHandler(e) {
        if (e.type === "mouseenter") {
            Object.assign(e.currentTarget.style, {
                transition: "all .2s linear",
                boxShadow: "0 15px 30px rgba(0, 0, 0, .1)",
                transform: "translate3d(0, -5px, 0)",
            });
           
        }else if(e.type === "mouseleave"){
            Object.assign(e.currentTarget.style, {
                transition: "all .2s linear",
                boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
                transform: "translate3d(0, -0, 0)",
            });
        }else if(e.type === "click"){
            var evt = new Event(GoodsItem.GOODS_DATA_EVENT);
            evt.data = this.data;
            this.dispatchEvent(evt);
        }
    }
}