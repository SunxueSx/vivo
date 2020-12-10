import Utils from "./Utils.js";
export default class SlideNav {
    constructor(slideArr) {
        this.slideArr = slideArr;
        this.elem = this.createElem();
    }
    createElem() {
        let div = Utils.ce("div", {
            width: "200px",
            height: "452px",
            position: "relative",
            zIndex: "4",
            float: "left",
            marginTop: "-512px",
            fontSize: 0,
            lineHeight: "1",
            backgroundColor: "#f0f3f9",
            paddingTop: "30px"
        });

        for (var i = 0; i < this.slideArr.length; i++) {
            var li = Utils.ce("li", {
                width: "100%",
                cursor: "pointer"
            });

            var goodsNameDiv = Utils.ce("a", {
                position: "relative",
                display: "block",
                padding: "0 48px 0 42px",
                color: "#333",
                fontSize: "14px",
                lineHeight: "60px",
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            });
            goodsNameDiv.textContent = `${this.slideArr[i]["title"]}`;
            li.addEventListener("mouseenter", e => this.mouseHandler(e));
            li.addEventListener("mouseleave", e => this.mouseHandler(e));

            var direc = Utils.ce("span", {
                display: "inline-block",
                width: "6px",
                height: "10px",
                position: "absolute",
                right: "28px",
            });
            direc.textContent = ">";
            goodsNameDiv.appendChild(direc);
            li.appendChild(goodsNameDiv);
            this.createLiDetail(i,li);

            div.appendChild(li);
        }
        return div;
    }
    appendTo(parent) {
        if (typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
    mouseHandler(e) {
        if (e.type === "mouseenter") {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.lastElementChild.style.display = "block";
        } else {
            e.currentTarget.style.backgroundColor = "#f0f3f9";
            e.currentTarget.lastElementChild.style.display = "none";
        }
    }
    createLiDetail(i,li){
        var categoryDiv = Utils.ce("div", {
            display: "none",
            // display: "block",//初始为隐藏状态
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "100%",
            textAlign: "left",
            whiteSpace: "nowrap",
            background: "#fff",
            backgroundClip: "padding-box",
            borderLeft: "14px solid transparent",
            overflow: "hidden",
        });
        var categoryDetail = Utils.ce("div", {
            display: "inline-block",
            verticalAlign: "top",
            padding: "8px 50px 0 44px",
            width: "656px",
            whiteSpace: "normal",
        });
        categoryDiv.appendChild(categoryDetail);

        var categoryAll = Utils.ce("a", {
            float: "right",
            color: "#999",
            fontSize: "12px",
            lineHeight: "58px",
        });
        categoryAll.textContent = "全部" + `${this.slideArr[i]["title"]}` + ">";

        var p = Utils.ce("p", {
            color: "#252525",
            fontSize: "16px",
            lineHeight: "58px",
        });
        p.textContent = `${this.slideArr[i]["title"]}`;

        categoryDetail.appendChild(categoryAll);
        categoryDetail.appendChild(p);

        var categorytTop = Utils.ce("ul", {
            marginBottom: "9px",
            paddingBottom: "6px",
            fontSize: "1px",
            textAlign: "justify",
            borderBottom: "1px solid transparent",
            borderColor: "#e5e5e5",
        });

        var dataMini = this.slideArr[i]["dataMini"];
        var dataImg = this.slideArr[i]["dataImg"];

        for (var j = 0; j < dataMini.length; j++) {
            var miniLi = Utils.ce("li", {
                display: "inline-block",
                verticalAlign: "top",
                margin: "0 10px 12px 0",
                width: "148px"
            });

            let src = dataMini[j]["src"];
            var miniA = Utils.ce("a", {
                display: "block",
                position: "relative",
                zIndex: "0",
                padding: "0 8px",
                color: "#555",
                fontSize: "14px",
                lineHeight: "50px",
                textAlign: "center",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                borderRadius: "6px",
                background: "50%",
                backgroundSize: "cover",
                overflow: "hidden",
            });
            miniA.style.backgroundImage = `url(${src})`;
            miniA.textContent = `${dataMini[j]["name"]}`;

            miniLi.appendChild(miniA);
            categorytTop.appendChild(miniLi);
        }
        //根据数据生成li添加到categorytTop
        categoryDetail.appendChild(categorytTop);

        var categorytProduct = Utils.ce("ul", {
            marginBottom: "-40px",
            paddingTop: "39px",
            width: "690px",
            fontSize: "1px",
            textAlign: "justify",
        });

        for (var k = 0; k < dataImg.length; k++) {
            var miniLi1 = Utils.ce("li", {
                display: "inline-block",
                verticalAlign: "top",
                position: "relative",
                marginBottom: "20px",
                width: "222px",
                fontsize: "0",
            });
            var iCorner = Utils.ce("i", {
                position: "absolute",
                margin: "-17px 0 0 36px",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
            });
            var cornerImg = Utils.ce("img", {
                width: "100%",
                height: "100%",
                display: "inline-block",
                verticalAlign: "middle",
                border: "0",
            });
            if(`${dataImg[k]["cornerSrc"]}`){
                cornerImg.setAttribute("src", `${dataImg[k]["cornerSrc"]}`);
            }
            

            iCorner.appendChild(cornerImg);

            var miniA1 = Utils.ce("a", {
                backgroundColor: "transparent",
                outline: "0",
            });
            var miniImg = Utils.ce("img", {
                width: "46px",
                height: "46px",
                display: "inline-block",
                verticalAlign: "middle",
                border: "0",
            });
            miniImg.setAttribute("src", `${dataImg[k]["src"]}`);

            var miniSpan = Utils.ce("span", {
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "8px",
                maxWidth: "168px",
                color: "#252525",
                fontSize: "14px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            });
            miniSpan.textContent = `${dataImg[k]["name"]}`;

            miniA1.appendChild(miniImg);
            miniA1.appendChild(miniSpan);
            miniLi1.appendChild(iCorner);
            miniLi1.appendChild(miniA1);
            categorytProduct.appendChild(miniLi1);
        }
        //根据数据生成li添加到categorytProduct

        categoryDetail.appendChild(categorytProduct);

        li.appendChild(categoryDiv);
    }
}