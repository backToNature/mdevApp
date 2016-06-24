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

    // 拷贝目录
    tools.file.cpdir(path.join(currentPath, '/src'), path.join(currentPath, '/build'));

    // 修改index.html转为online模式
    var htmlPath = path.join(currentPath, '/build/index.html'),
        htmlBuffer = fs.readFileSync(htmlPath, 'utf8');
    fs.writeFileSync(htmlPath, htmlBuffer.replace('window.mdevApp.debug = \'true\';', 'window.mdevApp.debug = \'false\';'), 'utf8');


    var modulePath = path.join(process.cwd(), './build/modules');
    var tplPath = path.join(process.cwd(), './build/static/tpl.js');

    require('./build/build-tpl.js')(modulePath, tplPath);

    require('./build/build-html.js')(path.join(process.cwd(), '/build/modules'));

    require('./build/sea-build.js');

    require('./build/css-format.js');

    require('./build/clean.js');
    
    // require('./build/compress.js');
}

module.exports = build;