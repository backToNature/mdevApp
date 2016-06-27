define(function(require, exports, module) {
    var $$data = require('./util/data-center'),
        $$router = require('./router/router'),
        $$api = require('./api/api'),
        $$query = require('../util/query');

    // 初始化页面配置数据
    $$data.set('pageConfig', require('../config'));
    console.log($$data.get('pageConfig'));
    // $('body').on('touchmove', function () {
    //     return false;
    // });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // 渲染页面
    var render = function (pageName, data) {
        if ($$data.get('currentPage')) {
            $$data.set('prePage', $$data.get('currentPage'));
        }
        if (!$$api.router) {
            $$api.router = $$router;
        }
        $$data.set('currentPage', pageName);
        require('./router/render')(pageName);
        require('./router/load-module')(pageName, data, $$api);
    };

    // 监听history变化
    History.Adapter.bind(window,'statechange', function() { 
        var State = History.getState(),
            pageName = State.data.pageName || 'index';
        render(pageName, State.data.data);
    });

    var firstPageName = $$query.getParams(location.search, 'pageName') || 'index';
    // 首屏加载
    render(firstPageName, {firstRender: true});
});