define(function(require, exports, module) {
    var $$data = require('../util/data-center'),
        debug = $.cookie()['debug_cookie'],
        $$module = require('./module'),
        modules = {};

    var loadModule = function (pageName, data, api) {
        var pageDetail = $$data.get('pageConfig:' + pageName), num = 0,
            $currentWrapper = pageDetail.level === 1 ? $('.doc.level-1 .main') : $('.doc.level-2.active .main'),
            moduleList = _.map(pageDetail.modules, function (item) {
                return item.split('.')[0];
            }),
            newModuleList = _.difference(moduleList, $$data.get('readyModule')),
            currentPageDetail = pageDetail,
            prePageDetail = $$data.get('pageConfig:' + $$data.get('prePage'));

        // 如果是二级页跳三级页，需要改变$currentWrapper
        if (prePageDetail && prePageDetail.level > 1 && currentPageDetail.level > 1) {
            $currentWrapper = $('.doc.level-2').not('.active').find('.main');
        }
        // 记录已经加载过的模块
        $$data.set('readyModule', _.union(moduleList, $$data.get('readyModule')));

        // 替换加载模块路径
        newModuleList = _.map(newModuleList, function (item) {
            return './modules/' + item + '/' + item + '.js';
        });

        var moduleReady = function () {
            if ($('.global_loading').css('display') === 'block') {
                window.setTimeout(function () {
                    $('.main').transition({
                        opacity: 1,
                        duration: 500,
                        easing: 'in-out',
                        complete: function() {
                            $('.global_loading').hide();
                            require('./page-animate')(pageName);
                        }
                    });
                }, 300);
            } else {
                $('.main').css('opacity', 1);
                require('./page-animate')(pageName);
            }
        };

        // 如果页面所有模块已经加载过了，直接算完成
        if (!newModuleList.length) { 
            // $(window).trigger('pageLoad', [pageName]);
            moduleReady();
            return;
        }

        newModuleList.forEach(function (item) {
            var moduleName = _.last(item.split('/')).replace('.js', ''),
            $module = $currentWrapper.find('div[node-type="module"]').filter('.module-' + moduleName);
            var done = function () {
                console.log(moduleName, window.mdevApp.exports);
                $$module.set(moduleName, window.mdevApp.exports(data, $module, api, $$module.get('/')));
                num ++;
                if (num === newModuleList.length) {
                    // 所有插件加载完成
                    moduleReady();
                }
            };
            if (debug === 'true') {
                seajs.use([item.replace('.js', '.css'), item], done);
            } else {
                $.when($.loadCss(item.replace('.js', '.css')), $.getScript(item.replace('.js', '.min.js')))
                .done(done);
            }
        });

    };
    module.exports = loadModule;
});