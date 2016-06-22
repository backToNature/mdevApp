define(function(require, exports, module) {
    var $$data = require('../util/data-center'),
        debug = $.cookie()['debug_cookie'],
        moduleTemp = {};

    module.exports = {
        set: function (moduleName, exportCb) {
            if (!$$data.get('modules')) {
                $$data.set('modules', {});
            }
            moduleTemp.export = exportCb;
            $$data.set('modules:' + moduleName, moduleTemp)
        },
        get: function (moduleName) {
            if (moduleName === '/') {
                return $$data.get('modules');
            } else {
                return $$data.get('modules:' + moduleName);
            }
        }
    };
});