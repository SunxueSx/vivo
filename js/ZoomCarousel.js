import BaseElement from "./BaseElement.js";
import Utils from "./Utils.js";


export default class ZoomCarousel extends EventTarget
{
    // 继承父类时执行的方法中如果使用到一些属性时，是无法获取当前类中创建属性
    // 因为父类的方法优先执行，才创建子类的属性
    height=58;
    carouselWidth=406;
    imgConWidth;
    imgWidth=58;
    rowImgNum=5;
    gap;
    pre;
    static CHANGE_IMG_EVENT="change_img_event";
    constructor(_list){
        super();
        this.list=_list;
        this.elem = this.createElem();
        this.gap=(this.carouselWidth-this.imgWidth*this.rowImgNum)/(this.rowImgNum+1);
        this.carouselWidth=this.carouselWidth-this.gap*2;
      
        this.createBn();
        this.createShowImage();
    }
    createElem(){
        if(this.elem) return this.elem;
        return Utils.ce("div",{
            position:"absolute",
            left:0,
        })
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
    setBoundingRect(rect){
        for(var prop in rect){
            this.elem.style[prop]=rect[prop]+"px";
        }
        this.elem.style.height=this.height+"px";
        if(rect.width){
            this.carouselWidth=rect.width-22*2;
            this.gap=(this.carouselWidth-this.imgWidth*this.rowImgNum)/(this.rowImgNum+1);
        }

    }
    createBn(){
        var left=Utils.ce("div",{
            backgroundImage:"url(../img/disabled-prev.png)",
            position:"absolute",
            width:"22px",
            height:"32px",
            top:(this.imgWidth-32)/2+"px"
        });   
        var right=left.cloneNode(false);
        left.style.left="0px";
        left.style.marginRight=this.gap+"px";
        Object.assign(right.style,{
            backgroundImage:"url(../img/sprite.png)",
            right:0,
            marginLeft:this.gap+"px",
            backgroundPosition:"-78px 0"
        });
        this.elem.appendChild(left);
        this.elem.appendChild(right);
        left.addEventListener("click",e=>this.clickHandler(e));
        right.addEventListener("click",e=>this.clickHandler(e));
        
    }

    createShowImage(){
        var show=Utils.ce("div",{
            width:430+"px",
            height:this.height+"px",
            position:"absolute",
            left:23+this.gap+"px",
            top:"0px",
            overflow:"hidden"
        });
        this.imgConW=(this.list.length*this.height)+this.gap*(this.list.length-1);
        
        this.imgCon=Utils.ce("div",{
           width:580+"px",
           height:this.height+"px",
           position:"absolute",
           left:0,
           transition:"all 0.5s",
        })
        for(var i=0;i<this.list.length;i++){
            var img=new Image();
            img.src=this.list[i];
            Object.assign(img.style,{
                border:"2px solid #e53e4100",
                marginLeft:i===0 ? 14+"px":0,
                // marginRight:i===this.list.length-1 ? 0 :33+"px",
                marginRight:50+"px",
                width:this.height-4+"px",
                height:this.height-4+"px",
                display:"inline-block",
            });
            if(i===0)this.changeImage(img);
            this.imgCon.appendChild(img);
        }
        this.imgCon.addEventListener("mouseover",e=>this.iconMouseHandler(e));
        show.appendChild(this.imgCon);
        this.elem.appendChild(show);
    }
    iconMouseHandler(e){
        if(e.target.constructor!==HTMLImageElement)return;
        this.changeImage(e.target);
    }

    changeImage(img){
        if(this.pre){
            this.pre.style.border="2px solid rgba(0,0,0,0)";
        }
        this.pre=img;
        this.pre.style.border="2px solid #e53e41";
        var evt=new Event(ZoomCarousel.CHANGE_IMG_EVENT);
        evt.src=img.src;
        this.dispatchEvent(evt);
    }

    clickHandler(e){
        if(e.currentTarget.style.backgroundImage.indexOf("disabled-prev.png")>-1){
            this.imgCon.style.left="0px";
           }else{
              var num=this.list.length-this.rowImgNum;
              this.imgCon.style.left=-num*(this.height+this.gap)+"px";
           }
    }
  
}