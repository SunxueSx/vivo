export default class Nav{
    constructor(_list){
        this.list = _list;
        this.navBindHandler();
    }
    navBindHandler(){
        for(var i=0;i<this.list.length-2;i++){
            this.fn =e=>this.mouseHandler(e);
            this.list[i].addEventListener("mouseenter",this.fn);
            this.list[i].addEventListener("mouseleave",this.fn);
        }
    }
    mouseHandler(e){
        var target = e.currentTarget.nextElementSibling;
        target.textContent = "22";
        console.log(target)
        Object.assign(target.style,{
            width:"100%",
            height:"300px",
            backgroundColor:"skyblue",
            position:"absolute",
            zIndex: "0",
            opacity: "0",
            top: "-424px",
            padding: "18px 0 36px",
            transition:"all 0.5s",
            textAlign:"center",
        })
        if(e.type === "mouseenter"){
            console.log("111")
            target.style.top = "70px";
            target.style.left = "0px";
            target.style.opacity = "1";
        }else if(e.type === "mouseleave"){
            console.log("222")
            target.style.top = "-424px";
            target.style.opacity = "0";
            // e.currentTarget.removeEventListener("mouseenter",this.fn);
            // e.currentTarget.removeEventListener("mouseleave",this.fn);
        }
    }
}