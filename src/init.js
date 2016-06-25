var tools = require('nodejs-tools');
var path = require('path');
var fs = require('fs');

var init = function () {
    if (fs.existsSync(path.join(process.cwd(), '/src'))) {
        console.log('please remove the \'src\' floder before!');
    } else {
        tools.file.cpdir(path.join(__dirname, '../src/demo/src'), path.join(process.cwd(), '/src'));
        var ignore = fs.readFileSync(path.join(__dirname, '../src/demo/ignore'), 'utf8');
        fs.writeFileSync(path.join(process.cwd(), '/.gitignore'), ignore, 'utf8');
    }
};
module.exports = init;