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

    $("#justSaySomething").click(function () {
       $("#p1").css("color","red").slideUp(2000).slideDown(2000);
    });

    $("#showString").click(function () {
        alert("Text:" + $("#p1").text());
        $("#p1").text(function (index, text) {
            return text + " new： " + "这是一个新赋予的字符串" + "index: " + index;
        });
    });
    $("#showHtml").click(function () {
        alert("HTML:" + $("#p1").html());
        $("#p1").html(function (index, oldhtml) {
            return oldhtml + "新" + "<b>新加的HTML<b>" + "index" + index;
        });
    });
    $("#inputButton").click(function () {
        alert("value：" + $("#test").val());
        $("#test").val("修改成另一个输入值");
    });
    $("#getbaidu").click(function () {
       alert($("#baidu").attr("href"));
       // $("#baidu").attr({"href":"http://www.jianshu.com/u/63829ada9944","title":"新的title"});
        $("#baidu").attr("href",function (index,origValue) {

            alert(origValue);
            return "http://www.jianshu.com/u/63829ada9944";
        });
    });

    $("#settingButtonP").click(function () {
        $("p").append("<b>追加文本</b>");
        var tex1 = "<p>第一个添加文本 </p>";
        var tex2 = $("<p></p>").text("jQuery添加的第二个文本");
        var text3 = document.createElement("p");
        text3.innerHTML = "使用 DOM 创建文本 text with DOM";
        $("body").append(tex1,tex2,text3);
    });
    $("#settingButtonOl").click(function () {
        $("ol").append("<li>追加列表项</li>");
    });

    $("#settingButtonDelete").click(function () {
        $("#settingdiv1").remove();
    });
    $("#settingButtonDeleteSon").click(function () {
        $("#settingdiv1").empty();
    });
    $("#settingButtonDeleteSome").click(function () {
        $("p").remove(".delete");
    });
    $("#settingButtonAddClass").click(function () {
       $("h1,h2,p").addClass("blue important");
       //$("div").addClass("important");
    });
    $("#settingButtonAddClassAndDelete").click(function () {
       $("p").toggleClass("blue");
       alert("背景颜色 = " + $("p").css("background-color"));
        $("p").css("background-color", "green");
    });
    $("#settingButtonWidthAndHeight").click(function () {
       var width = "";
       var height = "";
       width += "div 的宽度是: " + $("#settingdiv1").width() ;
       height += "div 的高度是: " + $("#settingdiv1").height();
       $("p.delete").html(width);
       $("p.height").html(height);

    });
    $("#settingButtonInnerWidthAndHeight").click(function () {
        var width = "";
        var height = "";
        width += "div 的宽度是: " + $("#settingdiv1").innerWidth() ;
        height += "div 的高度是: " + $("#settingdiv1").innerHeight();
        $("p.delete").html(width);
        $("p.height").html(height);
    });

    $("#settingButtonOuterWidthAndHeight").click(function () {
        var width = "";
        var height = "";
        width += "div 的宽度是: " + $("#settingdiv1").outerWidth() ;
        height += "div 的高度是: " + $("#settingdiv1").outerHeight();
        $("p.delete").html(width);
        $("p.height").html(height);
    });
    $("#traversalButtonparent").click(function () {
        $("span").parent().css({"color":"red","border":"2px solid red"});
    });
    $("#traversalButtonall").click(function () {
        $("span").parents().css({"color":"red","border":"2px solid red"});
    });
    $("#traversalButtonallul").click(function () {
        $("span").parents("ul").css({"color":"red","border":"2px solid red"});
    });
    $("#traversalButtonbetweenspananddiv").click(function () {
        $("span").parentsUntil("div").css({"color":"red","border":"2px solid red"});
    });
    $("#traversalButtonDiv").click(function () {
       $("div.ancestors").children().css({"color":"red","border":"2px solid red"});
    });
    $("#traversalButtonDivFind").click(function () {
        $("div.ancestors").find("*").css({"color":"red","border":"2px solid red"});
    });

    $("#traversalButtonsameLevel").click(function () {
        $("h2").siblings().css({"color":"red","border":"2px solid red"});
        $("h2").nextAll().css({"color":"green","border":"2px solid blue"});
        $("h2").next().css({"color":"red","border":"2px solid blue"});

    });
    $("#traversalButtonFitter").click(function () {
        $("div p").first().css("background-color","yellow");
        $("div p").last().css("background-color","blue");
        $("p").eq(1).css("background-color","red");
        $("p").filter(".traversalP").css("background-color","yellow");
    });

    $("#ajaxButtonImg").click(function () {
        $("#ajaxImg").load("http://www.runoob.com/wp-content/uploads/2016/04/img_fjords.jpg")
        var xmlhttp;
        if (window.XMLHttpRequest){
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }else {
            // IE6, IE5 浏览器执行代码
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("ajax_img").innerHTML = xmlhttp.responseText;
            }
            xmlhttp.open("GET","http://www.runoob.com/try/try/ajax/ajax_info.txt",true);
            xmlhttp.send();
        }
    });






})(jquery)