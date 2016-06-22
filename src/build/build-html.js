var tool = require('nodejs-tools');
var path = require('path');
var fs = require('fs');
var extensionDir = path.join(process.cwd(), '/build/modules');

var htmlToJs = function (filePath) {
    var htmlString = fs.readFileSync(filePath, 'utf8');
    var re = tool.htmlToJs(htmlString);
    fs.writeFileSync(path.join(path.dirname(filePath), path.basename(filePath) + '.js'), re, 'utf8');
    console.log('compiled success:' + path.basename(filePath) + '.js');
};

var buildSingleExtension = function (extensionName) {
    var extensionPath = path.join(extensionDir, extensionName);
    fs.readdirSync(extensionPath).forEach(function (item) {
        if (path.extname(item) === '.html') {
            htmlToJs(path.join(extensionPath, item));
        }
    });
};

var buildAllExtension = function (extensionDir) {
    fs.readdirSync(extensionDir).forEach(function (item) {
        if (path.extname(item) === '') {
            buildSingleExtension(item);
        }
    });
};

buildAllExtension(extensionDir);