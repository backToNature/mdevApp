var path = require('path');
var fs = require('fs');
var util = require('util');

var appendTpl = function(modulesDir, tplPath) {
    var tpl = 'define(function(require, exports, module) {var page = {%s};module.exports = page;});';
    var single = "'%s': require('../modules/%s/%s.html'),";
    var buffer = '';
    fs.readdirSync(modulesDir).forEach(function(item) {
        if (path.extname(item) === '') {
            buffer += util.format(single, item, item, item);
        }
    });
    buffer = buffer.substring(0, buffer.length - 1);
    buffer = util.format(tpl, buffer);
    fs.writeFileSync(tplPath, buffer, 'utf8');
};

module.exports = appendTpl;