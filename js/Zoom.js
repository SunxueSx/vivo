import BaseElement from "./BaseElement.js";
import Utils from "./Utils.js";

export default class Zoom extends BaseElement{
    mini;
    mask;
    zoom;
    static MINI_WIDTH=515;
    static MASK_WIDTH=347.75;
    static ZOOM_WIDTH=540
    constructor(){
        super();
        this.createMini();
        this.createZoom();
    }
    createElem(){
        if(this.elem) return this.elem;
        return Utils.ce("div",{
            position:"relative",
        });
    }
    createMini(){
        this.mini=Utils.ce("div",{
            width:Zoom.MINI_WIDTH+"px",
            height:Zoom.MINI_WIDTH+"px",
            position:"absolute",
            backgroundSize:"100% 100%"
        });
        this.mask=Utils.ce("div",{
            width:Zoom.MASK_WIDTH+'px',
            height:Zoom.MASK_WIDTH+"px",
            position:"absolute",
            display:"none",
            backgroundColor:"#FFBB6650"
        });
        var icons=Utils.ce("span",{
            position:"absolute",
            display:"block",
            backgroundImage:"url(../img/sprite.png)",
            width:"30px",
            height:"30px",
            bottom:"0px",
            right:"0px",
            backgroundPosition:"0 -24px"
        })
        this.mini.appendChild(icons);
        this.mini.appendChild(this.mask);
        this.elem.appendChild(this.mini);
        this.mini.addEventListener("mouseenter",e=>this.mouseHandler(e));
        this.mini.addEventListener("mouseleave",e=>this.mouseHandler(e));
    }
    createZoom(){
        this.zoom=Utils.ce("div",{
            width:Zoom.ZOOM_WIDTH+"px",
            height:Zoom.ZOOM_WIDTH+"px",
            position:"absolute",
            left:Zoom.MINI_WIDTH+1+"px",
            top:0,
            display:"none",
            zIndex:999,
        });
        this.elem.appendChild(this.zoom);
    }

    mouseHandler(e){
        if(e.type==="mouseenter"){
            this.mask.style.display="block";
            this.zoom.style.display="block";
            this.mini.addEventListener("mousemove",e=>this.mouseHandler(e))
        }else if(e.type==="mousemove"){
            var rect=this.mini.getBoundingClientRect();
          var x=e.clientX-Zoom.MASK_WIDTH/2-rect.x;
          var y=e.clientY-Zoom.MASK_WIDTH/2-rect.y;
          if(x<=0) x=0;
          if(y<=0) y=0;
          if(x>=Zoom.MINI_WIDTH-Zoom.MASK_WIDTH)x=Zoom.MINI_WIDTH-Zoom.MASK_WIDTH;
          if(y>=Zoom.MINI_WIDTH-Zoom.MASK_WIDTH)y=Zoom.MINI_WIDTH-Zoom.MASK_WIDTH;
          this.mask.style.left=x+"px"
          this.mask.style.top=y+"px"
          this.zoom.style.backgroundPositionX=-x*(Zoom.ZOOM_WIDTH/Zoom.MASK_WIDTH)+"px";
          this.zoom.style.backgroundPositionY=-y*(Zoom.ZOOM_WIDTH/Zoom.MASK_WIDTH)+"px";
        }else{
            this.mask.style.display="none";
            this.zoom.style.display="none";
        }
    }
    setBg(src){
        this.mini.style.backgroundImage="url("+src+")";
        this.zoom.style.backgroundImage="url("+src+")";
    }
}