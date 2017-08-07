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
       //$("#panel").slideDown("slow") ;
        $("#panel").slideToggle("slow") ;
    });
    $("#flip").dblclick(function () {
       $("#panel").slideUp("slow");
    });

    // $("#double").mouseenter(function () {
    //     alert("进入元素")
    // })
    // $("#double").mouseleave(function () {
    //     alert("离开元素")
    // })
})(jquery)