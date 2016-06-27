define(function(require, exports, module) {
    'use strict';
    window.mdevApp.exports = function (data, $dom, api, modules) {

        var eventBind = function () {
            $dom.delegate('li', 'tap', function() {
                var index = $(this).index();
                switch(index) {
                    case 1:
                        api.router.go('tap2', null, true);
                        $dom.find('li').removeClass('active').eq(index).addClass('active');
                    break;
                    case 2:
                        api.router.go('tap3', null, true);
                        $dom.find('li').removeClass('active').eq(index).addClass('active');
                    break;
                    case 3:
                        api.router.go('tap4', null, true);
                        $dom.find('li').removeClass('active').eq(index).addClass('active');
                    break;
                    default:
                        api.router.go('index', null, true);
                        $dom.find('li').removeClass('active').eq(index).addClass('active');
                    break;
                };
            });

            
        };
        

        eventBind();
        return {a: 1, b: 2};
    };
});