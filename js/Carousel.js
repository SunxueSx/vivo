import LoadImage from "./LoadImage.js";
import Utils from "./Utils.js";
export default class Carousel {
    w;
    h;
    bnlist;
    list;
    imageCon;
    parent;
    dot;
    dotList = [];
    pos = 0;
    direction = "";
    bool = false;
    x = 0;
    speed = 200;
    autoBool = false;
    time = 200;
    pre;
    static carouselList = [];

    constructor(_imgList,_mainWidth,_initHeight) {
        this.mainWidth = _mainWidth;
        this.mainHeight= _initHeight;
        
        this.carousel = this.createCarousel();
        new LoadImage(_imgList, list => this.finishHandler(list));
        Carousel.carouselList.push(this);
    }
    appendTo(parent) {
        if (parent.constructor === String) parent = document.querySelector(parent);
        parent.appendChild(this.carousel);
        this.parent = parent;
    }
    finishHandler(_list) {
       
        if (!this.w) {
            this.w = _list[0].width / 2;
        }
       
        this.list = _list.map(item => {
            item.style.width = this.w + "px";
            item.style.height = this.mainHeight + "px";
            item.style.position = "absolute";
            item.style.top = "0px";
            item.style.left = "50%";
            item.style.display = "block";
            item.style.marginLeft = - (this.w /2) +"px";
            return item;
        });
        
        Object.assign(this.carousel.style, {
            width: this.mainWidth + "px",
            height: this.mainHeight + "px",
        })
        this.createImageCon();
        this.createDot();
        this.changePre();
    }
   
    createCarousel() {
        var carousel = Utils.ce("div", {
            position: "relative",
            margin: "auto",
            backgroundColor: "rgba(255,0,0,0.1)",
        });
        return carousel;
    }
    createImageCon() {
        this.imageCon = Utils.ce("div", {
            width: this.w*2  + "px",
            height: this.mainHeight + "px",
            left: "50%",
            top:0,
            marginLeft:-this.w+"px",
            backgroundColor:"red"
        });
     
        this.imageCon.appendChild(this.list[0]);
        this.carousel.appendChild(this.imageCon);
    }

    createDot() {
        this.dot = Utils.ce('ul', {
            listStyle: "none",
            margin: "0px",
            padding: "0px",
            position: "absolute",
            bottom: "20px"
        })
        this.list.forEach((item, index) => {
            var li = Utils.ce("li", {
                width: "15px",
                height: "15px",
                backgroundColor: "rgba(255,0,0,0)",
                border: "1px solid #FF0000",
                borderRadius: "15px",
                float: "left",
                marginLeft: index === 0 ? 0 : "10px"
            }, this.dot);
            this.dotList.push(li);
        });
        this.carousel.appendChild(this.dot);
        this.dot.style.left = (this.mainWidth - this.dot.offsetWidth) / 2 + "px";
        this.dot.addEventListener("click", e => this.clickDotHandler(e));
    }

    clickDotHandler(e) {
        if (e.target.constructor !== HTMLLIElement) return;
        var index = this.dotList.indexOf(e.target);
        if (index === this.pos) return;
        this.direction = index > this.pos ? "left" : "right";
        this.pos = index;
        console.log(this.pos);
        this.createNextImage();
    }

    createNextImage() {
        if (this.direction === "left") {
            this.list[this.pos].style.marginLeft = -1280 + "px";
            this.imageCon.appendChild(this.list[this.pos]);
            this.x = 0;
        } else {
            this.imageCon.insertBefore(this.list[this.pos], this.imageCon.firstChild);
            this.imageCon.style.left = -this.w + "px";
            this.x = -this.w;
        }
        this.bool = true;
        this.changePre();
    }

    changePre() {
        if (this.pre) {
            this.pre.style.backgroundColor = "rgba(255,0,0,0)";
        }
        this.pre = this.dotList[this.pos];
        this.pre.style.backgroundColor = "rgba(255,0,0,0.6)";
    }

    mouseHandler(e) {
        if (e.type === "mouseenter") {
            this.autoBool = false;
            this.time = 200;
        } else {
            this.autoBool = true;
        }
    }

    update() {
        this.imgMove();
        this.autoPlay();
    }
    imgMove() {
        if (!this.bool) return;
        if (this.direction === "left") {
            this.x -= this.speed;
            if (this.x <= -this.w) {
                this.x = 0;
                this.bool = false;
                this.imageCon.firstElementChild.remove();
            }
            this.imageCon.style.left = this.x + "px";
        } else {
            this.x += this.speed;
            if (this.x >= 0) {
                this.x = 0;
                this.bool = false;
                this.imageCon.lastElementChild.remove();
            }
            this.imageCon.style.left = this.x + "px";
        }
    }
    autoPlay() {
        if (!this.autoBool) return;
        this.time--;
        if (this.time > 0) return;
        this.time = 200;
        var evt = new MouseEvent("click");
        this.dotList[0].dispatchEvent(evt);
    }
    static UPDATE() {
        for (var i = 0; i < Carousel.carouselList.length; i++) {
            Carousel.carouselList[i].update();
        }
    }
}