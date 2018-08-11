/**
 * Created by wangliugen on 2018/7/25.
 */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    /**
     * 控制标签宽度
     */
   var $ulContainer = $('.nav-tabs');
   //获取所有子元素宽度和
    var width = 30 ;//因为原本ul上有pading-left
    //遍历子元素
    $ulContainer.children().each(function (index,elment) {
       //console.log(elment.clientWidth);

        width += elment.clientWidth;
    });
    //判断当前ul宽度是否超出了屏幕，超出就显示横向滚动条
    console.log('测试宽度'+ width + '屏幕' + $(window).width());
    if (width > $(window).width()){
        $ulContainer.css('width',width)
            .parent().css('overflow-x','scroll');
    }else {

    }

    //console.log() ;
    var $newstitle= $('.news-title');
    //a点击注册事件
    $('#news .nav-pills a').on('click',function () {
       //获取当前点击元素
        var $this = $(this);
        //获取对应title值
        var title = $this.data('title');
        //设置
        $newstitle.text(title);


    });
});