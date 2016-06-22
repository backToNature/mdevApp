define(function(require, exports, module) {
    window.mdevApp.exports = function (data, $dom, api, modules) {
        $dom.find('.backToSecond').on('click', function () {
            api.router.go('demo-level-2');
        });
        $dom.find('.backToTop').on('click', function () {
            api.router.go('index');
        });
        return {x: 1, v: 2};
    };
});