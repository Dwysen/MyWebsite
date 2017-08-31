/**
 * Created by tdf on 2017/8/30.
 */

(function () {
    var acLi = $("#accordionList").find("li");
    acLi.mouseover(function () {
        if (!$(this).hasClass('curr')) {
            acLi.removeClass('curr');
            $(this).addClass('curr');

            // 切换背景
            acLi.each(function (index) {
                if ($(this).hasClass('curr')) {
                    $('.bg').fadeOut(300);
                    $('.bg:eq(' + index + ')').fadeIn(500);
                }
            });

            $('.curr').stop().animate({
                width: 700
            }, 500, 'linear');
            acLi.not('.curr').stop().animate({
                width: 100
            }, 500, 'linear');
        }
    });
})();
//设置第一屏高度为屏幕高度
// (function () {
    var visionHeight = document.documentElement.clientHeight;
    $(".accordionSection").css("height",visionHeight);
    $(".bg").css("height",visionHeight);
// })();
