var path = require('path');
var fs = require('fs');
var UglifyJS = require("uglify-js");

var rootPath = path.join(process.cwd(), './build');

fs.readdirSync(path.join(rootPath, 'modules')).forEach(function (item) {
    var result = UglifyJS.minify(path.join(rootPath, 'modules/' + item, item + '.min.js'));
    fs.writeFileSync(path.join(rootPath, 'modules/' + item, item + '.min.js'), result.code, 'utf-8');
});

fs.readdirSync(path.join(rootPath, 'lib')).forEach(function (item) {
    if (path.extname(item) === '.js') {
        var result = UglifyJS.minify(path.join(rootPath, 'lib', item));
        fs.writeFileSync(path.join(rootPath, 'lib', item), result.code, 'utf-8');
    }
});

var result = UglifyJS.minify(path.join(rootPath, 'core/core.min.js'));
fs.writeFileSync(path.join(rootPath, 'core/core.min.js'), result.code, 'utf-8');