import Shopping from "./Shopping";

export default class Main extends EventTarget {
    checkList = [];
    final = [];

    constructor(updateData,) {
        super();
        this.updateData = updateData;
        this.shopping = new Shopping();
        this.shopping.addEventListener(Shopping.CHECK_CHANGE, e => this.checkChangeHandler(e));
        this.shopping.addEventListener(Shopping.STEP_CHANGE, e => this.stepChangeHandler(e));
        this.shopping.addEventListener(Shopping.DELETE_CHANGE, e => this.deleteChangeHandler(e));
        this.shopping.setData(arr["list"])
        this.shopping.appendTo(".shopOrder");
    }

    //    var allChecked = document.querySelector("#allChecked");
    //    allChecked.addEventListener("click",clickHandler);
    totalPrice(arr) {
        // var total = document.querySelector("#total");
        // total.textContent = arr.length;
        var all = document.querySelector("#all");
        var allPrice = document.querySelector("#allPrice");
        var price = arr.reduce((value, item) => {
            if (item.checked)
                value += Number(item.total);
            return value;
        }, 0)
        allPrice.textContent = price;
        all.textContent = price;
    }
    checkChangeHandler(e) {
        e.data["checked"] = !e.data["checked"];
        this.checkList.push(e.data);
        this.final = Array.from(new Set(this.checkList));
        allSelect(this.final);
        totalPrice(this.final);
    }
    fstepChangeHandler(e) {
        this.final.forEach(item => {
            if (e.data.id == item.id) {
                item.num = e.step;
                item.total = e.step * item.price;
            }
        });
        totalPrice(this.final);
    }

    deleteChangeHandler(e) {
        this.final = this.final.filter(item => {
            return item.id !== e.data.id;
        });
        totalPrice(this.final);
        e.currentTarget.elem.children[1].children[1].remove();
    }
    allSelect(final) {
        allChecked.checked = this.final.every(item => {
            return item.checked
        });
    }

    clickHandler(e) {
        this.final.forEach(item => {
            item.checked = e.currentTarget.checked;
        });
        totalPrice(this.final);
    }
    ajaxRequest(url, e) {
        var arr;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", readyHandler);
        xhr.open("POST", "http://192.168.43.28:4006/" + url, false);
        if (!e) {
            xhr.send(JSON.stringify());
        } else {
            xhr.send(JSON.stringify([e.data.id]));
        }
        function readyHandler(e) {
            console.log(e.currentTarget.response);
            arr = JSON.parse(e.currentTarget.response);
        }
        return arr;
    }


}