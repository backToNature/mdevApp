var tools = require('nodejs-tools');
var path = require('path');
var fs = require('fs');

var init = function () {
    if (fs.existsSync(path.join(process.cwd(), '/src'))) {
        console.log('please remove the \'src\' floder before!');
    } else {
        tools.file.cpdir(path.join(__dirname, '../src/demo/src'), path.join(process.cwd(), '/src'));
        tools.file.cp(path.join(__dirname, '../src/demo/.gitignore'), path.join(process.cwd(), '/.gitignore'));
    }
};
module.exports = init;