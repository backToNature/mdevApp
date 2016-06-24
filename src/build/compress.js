var path = require('path');
var fs = require('fs');
var UglifyJS = require("uglify-js");

var CleanCSS = require('clean-css');

var rootPath = path.join(process.cwd(), './build');

// 压缩modules目录js
fs.readdirSync(path.join(rootPath, 'modules')).forEach(function (item) {
    var result = UglifyJS.minify(path.join(rootPath, 'modules/' + item, item + '.min.js'));
    fs.writeFileSync(path.join(rootPath, 'modules/' + item, item + '.min.js'), result.code, 'utf-8');
});

// 压缩lib目录js
fs.readdirSync(path.join(rootPath, 'lib')).forEach(function (item) {
    if (path.extname(item) === '.js') {
        var result = UglifyJS.minify(path.join(rootPath, 'lib', item));
        fs.writeFileSync(path.join(rootPath, 'lib', item), result.code, 'utf-8');
    }
});

// 压缩core.js
var result = UglifyJS.minify(path.join(rootPath, 'core/core.min.js'));
fs.writeFileSync(path.join(rootPath, 'core/core.min.js'), result.code, 'utf-8');

// 压缩static目录css
fs.readdirSync(path.join(rootPath, './static')).forEach(function (item) {
    if (path.extname(item) === '.css') {
        var css = fs.readFileSync(path.join(rootPath, './static', item), 'utf8');
        fs.writeFileSync(path.join(rootPath, './static', item), new CleanCSS().minify(css).styles, 'utf8');
    }
});