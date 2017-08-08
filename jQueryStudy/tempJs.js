/**
 * Created by wangliugen on 2017/8/3.
 */
$(document).ready(function () {
    $("button#buttton1").click(function () {
        $("#test").hide();
    });
    $("button#buttton2").click(function () {
        $(".test").hide();
    });
    $("p.test").click(function () {
        $(this).toggle();
    });
    $("p#test").click(function () {
        $(this).hide();
    });
    $("button#show").click(function () {
        $("p").show();
    });
    // $("button#fadein").click(function () {
    //     $("#div1").fadeIn();
    //     $("#div2").fadeIn("slow");
    //     $("#div3").fadeIn(3000);
    // })
    $("button#fadein").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
    $("button#fadeout").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    $("button#fadeTo").click(function () {
        $("#div1").fadeTo("slow",0.15);
        $("#div2").fadeTo("slow",0.4);
        $("#div3").fadeTo("slow",0.7);
    });

    $("p#double").dblclick(function () {
        $(this).hide();
    });
    $("p#double").focus(function () {
        $(this).css("background-color","#cccccc");
    });
    $("#flip").click(function () {
       $("#panel").slideDown(5000,function () {
            alert("回调如此简单")
        }) ;
        //$("#panel").slideToggle("slow") ;
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
    $("#flip").dblclick(function () {
       $("#panel").slideUp("slow");
    });
    $("#animation").click(function () {
        var div = $("#div-animation");
       $("#div-animation").animate({left:'250px'});
        div.animate({height:'300px',opacity:'0.4'},"slow");
        div.animate({width:'300px',opacity:'0.8'},"slow");
        div.animate({height:'100px',opacity:'0.4'},"slow");
        div.animate({width:'100px',opacity:'0.8'},"slow");
        div.animate({fontSize:'3em'});
    });
    $("#animation2").click(function () {
       $("#div-animation").animate({
           left: '250px',
           opacity: '0.5',
           height: '150px',
           width:'150px'
       }) ;
    });
    //也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：
    $("#animation3").click(function () {
       $("#div-animation").animate({
           left: '250px',
           height: '+=150px',
           width:'+=150px'
       })

    });

    // $("#double").mouseenter(function () {
    //     alert("进入元素")
    // })
    // $("#double").mouseleave(function () {
    //     alert("离开元素")
    // })
})(jquery)