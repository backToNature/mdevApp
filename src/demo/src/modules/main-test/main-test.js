define(function(require, exports, module) {
    'use strict';
    window.mdevApp.exports = function (data, $dom, api, modules) {

        $dom.find('.jump-2').on('tap', function () {
            api.router.go('demo-level-2', {data: 123});
        });

        $dom.find('#wrapper').height($(window).height() - $('.module-footer-test').height());

        var myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: false,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            bounceTime: 800,
            disablePointer: true
        });

        return {x: 1, v: 2};
    };
});