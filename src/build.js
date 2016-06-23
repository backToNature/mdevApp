var path = require('path');
var fs = require('fs');
var tools = require('nodejs-tools');

var build = function () {
    var currentPath = process.cwd();
    if (!fs.existsSync(path.join(currentPath, '/src'))) {
        var content = [
            '',
            '  Error:',
            '',
            '    Please exec \'mdevApp init\' before'
        ];
        console.log(content.join('\n'));
        return;
    }
    tools.file.cpdir(path.join(currentPath, '/src'), path.join(currentPath, '/build'));
    require('./build/append-tpl.js');
    require('./build/build-html.js');
    require('./build/sea-build.js');
    require('./build/css-format.js');
    require('./build/clean.js');
    require('./build/compress.js')
}

module.exports = build;