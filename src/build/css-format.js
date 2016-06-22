var fs = require('fs');
var path = require('path');
var walk = require('walk');
var px2em = require('./px2em');

var config = {
    ignorePath: [],
    formatPath: './build',
    px: 12
};

walker  = walk.walk(config.formatPath, { followLinks: false });
walker.on("file", fileHandler);
walker.on("errors", errorsHandler); // plural
walker.on("end", endHandler);

var file, tag = false;

function fileHandler(root, fileStat, next) {
    config.ignorePath.forEach(function (item) {
        if (root.split(path.sep).join('/').indexOf(item) >= 0) {
            tag = true;
        } else {
            tag = false
        }
    });
    if (fileStat.type === 'file' && tag === false) {
        if (path.extname(fileStat.name) === '.css') {
            px2em(path.join(process.cwd(), root, fileStat.name), config.px);
        }
    }
    next();
}

function errorsHandler(root, nodeStatsArray, next) {
    console.log(root);
    next();
}

function endHandler() {
    console.log("all done");
}
