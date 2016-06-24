var fs = require('fs');
var path = require('path');
var walk = require('walk');
var px2em = require('./px2em');

var CleanCSS = require('clean-css');

var config = {
    ignorePath: [],
    formatPath: './build',
    px: 12
};

walker  = walk.walk(config.formatPath, { followLinks: false });
walker.on("file", fileHandler);
walker.on("errors", errorsHandler); // plural
walker.on("end", endHandler);

var file, tag = false, cssFilePath, cssFile;

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
            cssFilePath = path.join(process.cwd(), root, fileStat.name);
            px2em(cssFilePath, config.px, function () {
                cssFile = fs.readFileSync(cssFilePath, 'utf8');
                fs.writeFileSync(cssFilePath, new CleanCSS().minify(cssFile).styles, 'utf8');
            });
        }
    }
    next();
}

function errorsHandler(root, nodeStatsArray, next) {
    next();
}

function endHandler() {
    

}
