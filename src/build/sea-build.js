var sbuilder = require('seajs-builder');
var fs = require('fs');
var path = require('path');
var currentPath = process.cwd();
fs.readdirSync(path.join(currentPath, './build/modules')).forEach(function (item) {
    sbuilder.build('./build/modules/' + item + '/' + item + '.js', './', './build/modules/'+ item + '/' + item + '.min.js');
});
sbuilder.build('./build/core/core.js', './', './build/core/core.min.js');