import Utils from "./Utils.js";
import CheckBox from "./CheckBox.js";
import StepNumber from "./StepNumber.js";

export default class Shopping extends EventTarget{
    table;
    static styleBool=false;
    headList=["全选","","商品名称","价格（元）","数量","优惠","赠送积分","小计（元）","操作"];
    static CHECK_CHANGE="check_change_event";
    static STEP_CHANGE="step_change_event";
    static DELETE_CHANGE="delete_change_event";
    constructor(){
        super();
        this.elem=this.createElem();
    }
    createElem(){
        if(this.elem) return this.elem;
        return Utils.ce("table");
    }
    appendTo(parent){
        if(typeof parent==="string") parent=document.querySelector(parent);
        parent.appendChild(this.elem);
    }
    setData(list){
        if(this.elem) this.elem.remove();
        this.createHead(this.elem,list);
        this.createListTr(this.elem,list);
    }
    createHead(table,list){
        var thead = Utils.ce("thead");
       
        var thr=Utils.ce("tr");
        for(var j=0;j<this.headList.length;j++){
           var th=Utils.ce("th");
           th.textContent=this.headList[j];
           thr.appendChild(th);
        }
        thead.appendChild(thr);
        table.appendChild(thead);
    }
    createListTr(table,list){
        var tbody = Utils.ce("tbody");
        for(var i=0;i<list.length;i++){
            var tr=Utils.ce("tr");
            for(var prop in list[i]){
                if(prop==="id") continue;
                var td=Utils.ce("td");
                this.createTdContent(td,list[i],prop);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }   
        table.appendChild(tbody);
    }
    createTdContent(td,data,prop){
        switch(prop){
            case "checked":
                let ck=new CheckBox(data);
                ck.setCheck(data[prop]);
                ck.appendTo(td);
                ck.addEventListener("change",e=>this.checkHandler(e))
                break;
            case "icon":
                var img=new Image();
                img.src=data[prop];
                td.appendChild(img);
                break;
            case "total":
                td.style.fontWeight="600";
            case "price":
                // td.textContent="￥"+data[prop].toFixed(2);
                td.textContent=data[prop];
                break
            case "deleted":
                var span=Utils.ce("span");
                span.style.marginLeft="10px";
                span.textContent="删除";
                span.data=data;
                td.appendChild(span);
                span.addEventListener("click",e=>this.deleteHandler(e));
                break;
            case "num":
                var step=new StepNumber(data);
                step.setStep(data[prop]);
                step.appendTo(td);
                step.addEventListener("change",e=>this.stepChangeHandler(e))
                break;
            default :
               td.textContent=data[prop];
               td.style.paddingLeft="15px"
               break
        }
    }

    stepChangeHandler(e){
       var evt=new Event(Shopping.STEP_CHANGE);
       evt.data=e.data;
       evt.step=e.step;
       this.dispatchEvent(evt);
    }
    checkHandler(e){
        var evt=new Event(Shopping.CHECK_CHANGE);
        evt.data=e.data;
        evt.checked=e.checked;
        this.dispatchEvent(evt);
    }
    deleteHandler(e){
        var evt=new Event(Shopping.DELETE_CHANGE);
        evt.data=e.currentTarget.data;
        this.dispatchEvent(evt);
    }
}