define(function (require, exports, module) {
    var storage = {};
    module.exports = {
        set: function (ns, val) {
            var dep = ns.split(':');
            var obj = storage;
            var i;
            for (i = 0; i < dep.length; i++) {
                if (obj[dep[i]] === undefined) {
                    obj[dep[i]] = {};
                }
                if (i === dep.length - 1) {
                    obj[dep[i]] = val;
                } else {
                    obj = obj[dep[i]];
                }
            }

            return val;
        },
        get: function (ns) {
            if (ns === '/') {
                return storage;
            }

            var dep = ns.split(':');
            var obj = storage;
            var i;
            for (i = 0; i < dep.length; i++) {
                obj = obj[dep[i]];

                if (obj === undefined) {
                    break;
                }
            }

            return obj;
        }
    };
});