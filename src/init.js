var tools = require('nodejs-tools');
var path = require('path');

var init = function () {
    tools.file.cpdir(path.join(__dirname, '../src/demo/src'), path.join(process.cwd(), '/src'));
    tools.file.cp(path.join(__dirname, '../src/demo/.gitignore'), path.join(process.cwd(), '/.gitignore'));
};
module.exports = init;