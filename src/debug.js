var path = require('path');
var fs = require('fs');
var nodeServer = require('nodejs-server');
var tools = require('nodejs-tools');
var buildTpl = require('./build/build-tpl');


var util = {
    last: function (arr) {
        if (arr.length > 0) {
            return arr[arr.length - 1];
        } else {
            return undefined;
        }
    }
};

var watch = function (dirname) {
    tools.watch(dirname, function (data) {
        var key;
        for (key in data) {
            key = path.join(key);
            if (path.extname(key) === '.html' && key.indexOf(path.join(dirname, './modules')) >= 0) {
                if (path.basename(key, '.html') === util.last(path.dirname(key).split(path.sep))) {
                    buildTpl(path.join(dirname, './modules'), path.join(dirname, './static/tpl.js'));
                    var htmlString = fs.readFileSync(key, 'utf8');
                    var re = tools.htmlToJs(htmlString);
                    fs.writeFileSync(key + '.js', re, 'utf8');
                    console.log(key + ': has build successful!');
                }
            }
        }
    });
};

var serverStart = function () {
    var root = path.join(process.cwd(), './src');
    watch(root);
    var port = process.argv[3] || 80;
    var nserver = new nodeServer(root, port);
    buildTpl(path.join(root, './modules'), path.join(root, './static/tpl.js'));
    require('./build/build-html')(path.join(process.cwd(), '/src/modules'));
    nserver.config({
        proxy: true,
        allowExtension: ['.woff','.crx', '.mp4', '.apk', '.mp3']
    });
    nserver.start();
};
module.exports = serverStart;