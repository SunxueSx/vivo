import BaseElement from "./BaseElement.js";
import Zoom from "./Zoom.js";
import ZoomCarousel from "./ZoomCarousel.js";
import Utils from "./Utils.js";
export default class ZoomShow extends BaseElement
{
    
    constructor(list){
        super();
        this.createZoom();
        this.createCarousel(list);
    }
    createElem(){
        if(this.elem) return this.elem;
        return Utils.ce("div",{
            position:"relative",
        })
    }
    createZoom(){
        this.zoom=new Zoom();
        this.zoom.appendTo(this.elem);
    }

    createCarousel(list){
        this.carousel=new ZoomCarousel(list);
        this.carousel.appendTo(this.elem);
        this.carousel.setBoundingRect({
            width:Zoom.MINI_WIDTH,
            top:Zoom.MINI_WIDTH+1,
        });
        this.carousel.addEventListener(ZoomCarousel.CHANGE_IMG_EVENT,e=>this.changeImage(e));
        this.carousel.changeImage(this.carousel.imgCon.firstElementChild);
    }
    changeImage(e){
        this.zoom.setBg(e.src);
    }
}