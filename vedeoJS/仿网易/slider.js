/**
 * Created by wangliugen on 2018/1/15.
 */
window.onload = function () {

    function $(id) {
        return document.getElementById(id);
    }

    var  jsSlider = $("js_slider");
    var sliderMainBlock = $("slider_main_block");
    var imgs = sliderMainBlock.children;
    var sliderCtrl = $("slider_ctrl");

    for (var i = 0 ; i < imgs.length; i ++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length - i;
        sliderCtrl.insertBefore(span,sliderCtrl.children[1]);
    }
    var spans = sliderCtrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    var scrollWidth = jsSlider.clientWidth;
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = scrollWidth + "px";

    }

    var iNow = 0;
    for (var  temp in spans) {
        spans[temp].onclick = function () {
            if(this.className === "slider-ctrl-prev") {
                // alert("您点击了左侧按钮");
                //  当我们左侧点击时候， 当前的这张图片 先慢慢的走到右边  上一张 一定先快速走到左侧 （-310）的位置，然后慢慢的走到舞台中
                animate(imgs[iNow],{left: scrollWidth});
                --iNow < 0 ?  iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left: 0});
                setSquare();

            }else if(this.className === "slider-ctrl-next") {
                autoPlay();
            }else {
                // 我们首先要知道我们点击是第几张图片  --- 获得当前的索引号
                // alert(this.innerHTML);
                var that = this.innerHTML - 1;
                if(that > iNow) {
                    // 做法等同于 右侧按钮
                    animate(imgs[iNow],{left: -scrollWidth});  // 当前的这张慢慢的走出去 左侧
                    imgs[that].style.left = scrollWidth + "px"; // 点击的那个索引号 快速走到右侧  310
                }else  {
                    // 做法等同于 左侧按钮
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(imgs[iNow],{left: 0});
                setSquare();
            }

        }
    }
    var  timer = null;
    timer = setInterval(autoPlay,2000);
    //鼠标经过清除定时器
    js_slider.onmouseover = function() {
        clearInterval(timer);
    };
    js_slider.onmouseout = function() {
        clearInterval(timer);  // 要执行定时器 先清除定时器
        timer = setInterval(autoPlay,2000);  // 开启定时器
    };
    function autoPlay(){
        // 当前的那个图片 慢慢的走到 -scrollWidth 位置
        animate(imgs[iNow],{left:-scrollWidth});
        ++iNow > imgs.length-1 ? iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        animate(imgs[iNow], {left: 0});
        setSquare();



    }

    function setSquare() {
        //  清除所有的span current   留下 满足需要的拿一个
        for(var i=1;i<spans.length-1;i++){   //  8个span   我们要 1-6  不要 7  索引号
            spans[i].className = "slider-ctrl-con";
        }
        spans[iNow+1].className = "slider-ctrl-con current";  // 记住 + 1
    }



};

























