import Utils from "./Utils.js";

export default class GoodsDetail {
    constructor(_detailData){
        this.detailData = _detailData;
        this.elem = this.createElem();
    }
    createElem(){
        let detailDiv = Utils.ce("div",{
            width:"1200px", 
            margin: "0 auto",
            background:"pink",
            backgroundColor: "#fff",
            position: "relative",
        });
        this.createTitle(detailDiv);
        // this.createZoom(detailDiv);
        return detailDiv;
    }
    createTitle(detailDiv){
        var div = Utils.ce("div",{
            display:"inline-block",
            width:"100%",
            height:"72px",
            fontSize:"13px",
            lineHeight:"72px",
        });
        var indexA = Utils.ce("a",{
            display:"inline-block",
            color:"#333",
            cursor:"pointer",
        });
        indexA.textContent = "商城首页";
        var arrow = Utils.ce("span",{
            width:"13px",
            fontSize:"13px",
            height:"13px",
            color: "#999",
            padding:"0px 8px",
        });
        arrow.textContent = ">";
        div.appendChild(indexA);
        div.appendChild(arrow);

        var indexA1 = indexA.cloneNode(false);
        indexA1.textContent = "智能手机";
        var arrow1 = arrow.cloneNode(true);

        var span = Utils.ce("span",{
            color:"#999",
        });
        console.log(this.detailData)
        span.textContent = `${this.detailData["name"]}`;

        // span.textContent = "vivo X30 Pro 5G版 8GB+128GB 秘银";
        div.appendChild(indexA1);
        div.appendChild(arrow1);
        div.appendChild(span);

        detailDiv.appendChild(div);
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
}