import Utils from "./Utils.js";

export default class GoodsDetailRight{
    constructor(_data){
        this.data = _data;
        this.elem = this.createElem();
        this.renderHtml();
    }
    createElem(){
        let div  = Utils.ce("div");
        div.className = "right";
        return div;
    }
    renderHtml(){
        var price = parseInt(this.data["price"]);
        this.elem.innerHTML =`
        <h3>${this.data["name"]}  8GB+128GB 秘银</h3>
        <p class="info"><span>【限时享：①12期免息；②下单减200，到手价1998；③加赠半年延保】
            </span>双模5G，骁龙765G，44W超快闪充，5000mAh超大电池，PC级超级液冷散热</p>
        <div id="price" class="price clearFixed">
            <div class="sale fl"><b>¥</b>
                <span>${price}.00</span>
                <span></span>
            </div>
            <ul class="favour fl">
                <li><span>赠品</span><span>半年延保-69元</span></li>
                <li><span>满减</span><span>满1500元减200元</span></li>
                <li><span>积分</span><span>购买即送${price}积分</span></li>
            </ul>
        </div>
        <div id="priceList" class="priceList">
            <h1>版本</h1>
            <span>5G全网通版 8GB+128GB</span>
            <span>5G全网通版 6GB+128GB</span>
        </div>
        <div id="changeNum" class="changeNum">
            <h1>数量</h1>
            <button class="subBtn" type="button" disabled>-</button>
            <input type="text" value="1">
            <button class="addBtn" type="button">+</button>
        </div>
        <button id="okBtn" class="okBtn" type="button" item_id=${this.data["id"]}>加入购物车</button>
        <button id="okBtn" class="buyBtn" type="button">立即购买</button>
        `
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
}