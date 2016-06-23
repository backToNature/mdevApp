var fs = require('fs');
var path = require('path');
var tools = require('nodejs-tools');
var walk = require('walk');

// core 目录处理
var corePath = path.join(process.cwd(), './build/core');
fs.readdirSync(corePath).forEach(function (item) {
    if (item === 'core.js') {
        tools.file.rm(path.join(corePath, item));
    }
    if (path.extname(item) === '') {
        tools.file.rmdir(path.join(corePath, item));
    }
});
tools.file.rmdir(path.join(process.cwd(), './build/util'));
// tools.file.rm(path.join(process.cwd(), './build/static/tpl.js'));
tools.file.rm(path.join(process.cwd(), './build/config.js'));

walker  = walk.walk('./build/modules', { followLinks: false });

walker.on("file", fileHandler);
walker.on("errors", errorsHandler); // plural 
walker.on("end", endHandler);

function fileHandler (root, fileStat, next) {
    if (fileStat.type === 'file' && (path.extname(fileStat.name) === '.js' || path.extname(fileStat.name) === '.html')) {
        var filePath = path.join(process.cwd(), root, fileStat.name);
        var moduleName = path.basename(path.dirname(filePath));
        if (fileStat.name !== moduleName + '.min.js' && fileStat.name !== moduleName + '.min.css') {
            tools.file.rm(filePath);
        }
    }
    next();
}

function errorsHandler(root, nodeStatsArray, next) {
    next();
}

function endHandler() {
    console.log("all done");
}

