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

var file, tag = false, num = 0, ready = 0;

var formatEnd = function () {
    console.log(7770);
};

function fileHandler(root, fileStat, next) {
    config.ignorePath.forEach(function (item) {
        if (root.split(path.sep).join('/').indexOf(item) >= 0) {
            tag = true;
        } else {
            tag = false;
        }
    });
    if (fileStat.type === 'file' && tag === false) {
        if (path.extname(fileStat.name) === '.css') {
            num ++;
            px2em(path.join(process.cwd(), root, fileStat.name), config.px, function () {
                // console.log(num);
                ready ++;
                formatEnd();
            });
        }
    }
    next();
}

function errorsHandler(root, nodeStatsArray, next) {
    next();
}

function endHandler() {
    formatEnd = function () {
        console.log(8888);
    };
}
