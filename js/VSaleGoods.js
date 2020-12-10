import Utils from "./Utils.js";
export default class VSaleGoods {
    constructor(_data, _width, _height) {
        this.data = _data;
        this.width = _width;
        this.height = _height;
        this.elem = this.createElem();
    }

    createElem() {
        let div = Utils.ce("div");
        Object.assign(div.style, {
            width: this.width + "px",
            height: this.height + "px",
            position: "relative",
            backgroundColor: "#ffffff",
            float: "left",
            marginRight: "7px",
        });
        this.fn = e => this.mouseHandler(e)
       
        div.addEventListener("mouseenter",this.fn );
        div.addEventListener("mouseleave",this.fn );
        
        let corner = Utils.ce("img", {
            position: "absolute",
            right: "50px",
            top: "28px",
            zIndex: "1",
            width: "60px",
            height: "60px",
        });
        corner.setAttribute("src", `${this.data[0]}`);
        div.appendChild(corner);
        let a = Utils.ce("a", {
            display: "block",
            width: "293px",
            // height:"213px",
            textAlign: "center"
        });
        let saleGoodsImg = Utils.ce("img", {
            width: "172px",
            height: "172px",
            marginTop: "41px",
            marginLeft: "62px"
        });
        saleGoodsImg.setAttribute("src", `${this.data[1]}`)
        a.appendChild(saleGoodsImg);
        div.appendChild(a);

        let infoDiv = Utils.ce("div", {
            padding: "0 20px"
        });
        let nameP = Utils.ce("p", {
            fontSize: "16px",
            textAlign: "center",
            color: "#333",
            lineHeight: "30px",
            paddingTop: "16px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        });
        nameP.textContent = `${this.data[2]}`;

        let descP = Utils.ce("p", {
            lineHeight: "17px",
            height: "17px",
            marginTop: "10px",
            fontSize: "12px",
            color: "#333",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        });
        descP.textContent = `${this.data[3]}`;

        let priceP = Utils.ce("p", {
            marginTop: "20px",
            textAlign: "center",
        });
        let textPrice = Utils.ce("span", {
            color: "#f51919",
            fontSize: "22px",
        });
        textPrice.textContent = `${this.data[4]}`;

        let disabledPrice = Utils.ce("span", {
            marginLeft: "6px",
            textDecoration: "line-through",
            color: "#aaa",
            fontSize: "14px",
        });
        disabledPrice.textContent = `${this.data[5]}`;

        priceP.appendChild(textPrice);
        priceP.appendChild(disabledPrice);

        infoDiv.appendChild(nameP);
        infoDiv.appendChild(descP);
        infoDiv.appendChild(priceP);

        div.appendChild(infoDiv);
        return div;
    }
    appendTo(parent) {
        if (typeof parent === "string") parent = document.querySelector(parent);
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
        }
    }
}