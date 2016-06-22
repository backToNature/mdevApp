define(function(require, exports, module) {
    var $$data = require('../util/data-center'),
        $$tpl = require('../../static/tpl');

    var render = function (pageName) {
        var pageDetail = $$data.get('pageConfig:' + pageName),
            $currentWrapper = pageDetail.level === 1 ? $('.doc.level-1 .main') : $('.doc.level-2.active .main'),
            prePageDetail = $$data.get('pageConfig:' + $$data.get('prePage')),
            currentPageDetail = pageDetail;
        if (prePageDetail && prePageDetail.level > 1 && currentPageDetail.level > 1) {
            $currentWrapper = $('.doc.level-2').not('.active').find('.main');
        }
        $currentWrapper.find('div[node-type="module"]').hide();
        $currentWrapper.css('opacity', 0);
        pageDetail.modules.forEach(function (item) {
            var moduleName = item.split('.')[0],
                moduleStatus = item.split('.')[1] || 0,
                tpl = $$tpl[moduleName],
                $module = $currentWrapper
                .find('div[node-type="module"]')
                .filter('.module-' + moduleName);
            if (currentPageDetail.level > 1) {
                $module = $module.length ? $module : $('.doc.level-2 .main').find('div[node-type="module"]').filter('.module-' + moduleName);
            }
            $module = $module.length ? $module : $(velocityjs.render(tpl, {status: moduleStatus}));
            $module.show();
            $currentWrapper.append($module);
        });
    };
    module.exports = render;
});