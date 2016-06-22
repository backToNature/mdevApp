define(function(require, exports, module) {
    var querystring = {
        stringToObject: function (str) {
            var obj = {};
            str = str.replace(/.*\?/, '');
            if (typeof str === 'string') {
                str = decodeURIComponent(str);
                var arrtmp = str.split('&'),item, i, j;
                for (i = 0; i < arrtmp.length; i++) {
                    item = arrtmp[i];
                    j = item.indexOf('=');
                    if (item.length > 0) {
                        if (j < 0) {
                            obj[item] = '';
                        } else if (j > 0) {
                            obj[item.substring(0, j)] = item.substr(j + 1);
                        }
                    }
                }
            }
            return obj;
        },
        objectToString: function (obj) {
            return $.param(obj);
        },
        addParam: function (query, key, val) {
            query = query.replace(/.*\?/, '');
            var obj = this.stringToObject(query),
                temp = {};
            temp[key] = val;
            return this.objectToString(_.extend(obj, temp));
        },
        getParams: function (query, key) {
            query = query.replace(/.*\?/, '');
            return this.stringToObject(query)[key];
        }
    };
    module.exports = querystring;
});