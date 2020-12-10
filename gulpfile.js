var gulp=require("gulp");
var load=require("gulp-load-plugins")();
var browser=require("browser-sync").create();


function saveJS(done){
     gulp.src("./js/VSaleGoods.js")
    .pipe(load.uglify())
    .pipe(load.rename("VSaleGoods.min.js"))
    .pipe(gulp.dest("./dist/js/"))
    .on("end",browser.reload);
     return done();
}
// function saveJS1(done){
//     gulp.src("./js/Carousel.js")
//    .pipe(load.uglify())
//    .pipe(load.rename("Carousel.min.js"))
//    .pipe(gulp.dest("./dist/js/"))
//    .on("end",browser.reload);
//     return done();
// }

function saveCss(done){
    gulp.src("./scss/*.scss")
    .pipe(load.sass())
    .pipe(load.concat("main.css"))
    .pipe(load.minifyCss())
    .pipe(load.rename("main.min.css"))
    .pipe(gulp.dest("./dist/css/"))
    .on("end",browser.reload);
    return done();
}

exports.default=function(){
    browser.init({
        server:"./",
        port:4001
    })
    gulp.watch("./*.html",function(done){
        browser.reload();
        done();
    });
    gulp.watch("./scss/*.scss",saveCss);
    gulp.watch("./js/VSaleGoods.js",saveJS)
}
