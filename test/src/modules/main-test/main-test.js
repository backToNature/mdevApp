define(function(require, exports, module) {
    window.mdevApp.exports = function (data, $dom, api, modules) {
        console.log(58979);
        $dom.find('.jump-2').on('click', function () {
            api.router.go('demo-level-2');
        });
        return {x: 1, v: 2};
    };
});