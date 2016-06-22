define(function(require, exports, module) {
    var $$data = require('../util/data-center'),
        $$easing = require('../util/easing');

    var pageForward = function () {
        var prePage = $$data.get('prePage'),
            currentPage = $$data.get('currentPage'),
            prePageDetail = $$data.get('pageConfig:' + prePage),
            currentPageDetail = $$data.get('pageConfig:' + currentPage),
            $current = currentPageDetail.level === 1 ? $('.doc.level-1') : $('.doc.level-2.active'),
            $pre = prePage ? prePageDetail.level === 1 ? $('.doc.level-1') : $('.doc.level-2.active') : undefined;
        if (!prePage) {
            // 首次渲染
            if (currentPageDetail.level > 1) {
                $('.doc.level-1')
                .css('transform', 'translate3d(-'+$(window).width() * 0.32+'px,0,0)')
                .hide();
                $current
                .css('transform', 'translate3d(0,0,0)')
                .css('position', 'static');
                if (currentPageDetail.level === 3) {
                    $('.doc.level-2').not('.active')
                    .css('position', 'static')
                    .css('transform', 'translate3d(-'+$(window).width() * 0.32+'px,0,0)').hide();
                }
            }
        } else {
            if (prePageDetail.level === 1) {
                // 1级页面跳1级页面
                if (currentPageDetail.level === 1) {

                } else {
                    // 1级页面跳2级页面
                    $('.doc.level-2').not('.active').css('position', 'fixed')
                    .css('transform', 'translate3d(100%,0,0)');
                    $$easing.easeIn($current, $pre);
                  }
            } else {
                // 2级3级页面跳1级页面
                if (currentPageDetail.level === 1) {
                    $$easing.easeOut($current, $pre);
                } else {
                    // 2级页面跳3级页面
                    $current = $('.doc.level-2').not('.active');
                    $pre.removeClass('active');
                    $current.addClass('active');
                    $pre.show();
                    $current.show();
                    // 过渡动画
                    if (currentPageDetail.level >= prePageDetail.level) {
                        $$easing.easeIn($current, $pre);
                    } else {
                        $$easing.easeOut($current, $pre);
                    }
                }
            }
        }

    };
    
    module.exports = pageForward;
});