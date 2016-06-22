define(function(require, exports, module) {
    var $$data = require('../util/data-center'),
        $$api = require('../api/api'),
        $$query = require('../../util/query');
    var router = {
        go: function (pageName, data, isNotRecordHistory) {
            if (isNotRecordHistory !== true) {
                History.pushState({pageName: pageName, data: data}, $$data.get('pageConfig:' + pageName).title, "?" + $$query.addParam(location.search, 'pageName', pageName))
            } else {
                History.replaceState({pageName: pageName, data: data}, $$data.get('pageConfig:' + pageName).title, "?" + $$query.addParam(location.search, 'pageName', pageName))
            }
        },
        back: function (num) {
            _.isNumber(num) ? History.back(num) : History.back();
        },
        forward: function (num) {
            _.isNumber(num) ? History.go(num) : History.go();
        }
    };
    module.exports = router;
});