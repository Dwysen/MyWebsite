/**
 * Created by tdf on 2017/8/30.
 */

(function () {
    var wrapLi = $("#wrap").find("li");
    wrapLi.mouseover(function () {
        if (!$(this).hasClass('curr')) {
            wrapLi.removeClass('curr');
            $(this).addClass('curr');

            // 切换背景
            wrapLi.each(function (index) {
                if ($(this).hasClass('curr')) {
                    $('.bg').fadeOut(300);
                    $('.bg:eq(' + index + ')').fadeIn(500);
                }
            });

            $('.curr').stop().animate({
                width: 700
            }, 500, 'linear');
            wrapLi.not('.curr').stop().animate({
                width: 100
            }, 500, 'linear');
        }
    });
})();
