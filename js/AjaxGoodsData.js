export default class AjaxGoodsData{
    constructor(){
        this.goodsData = this.ajaxData();
    }
    ajaxData(){
        var goodsData ;
        var xhr  = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",readyHandler);
        xhr.open("POST", "http://192.168.43.28:4006/load",false);
        xhr.send();

        function readyHandler() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                goodsData = JSON.parse(xhr.response)["data"];
            }
        }
        return goodsData;
    }
}