/**
 * Created by wangliugen on 2018/8/16.
 */
$(function () {
    $carousle = $('.carousel');
    var startX,endX;
    $carousle.on('touchstart',function (e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousle.on('touchmove',function (e) {
       endX =  e.originalEvent.touches[0].clientX;
    });
    $carousle.on('touchend',function () {
        if (endX - startX > 50){
            console.log('右');
            $(this).carousel('prev');

        }else if (startX - endX > 50){
            console.log('左');
            $(this).carousel('next');
        }
    });

    $('#left_item_groups a').on('click',function () {
        $('#left_item_groups').children().removeClass('active');
         var $this = $(this);
         $this.addClass('active');

    });

    $('#show_delete_product').modal(options);
});
