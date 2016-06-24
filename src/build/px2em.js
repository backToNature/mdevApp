var fs = require('fs');
var paths = require('path');

var config = {
    px: 12,
    fixNumber: 9,
    type: 'rem',
    cssClass: 'em'
};
var reg = {
    // 数字+px 10px
    px: /\d+px/g,
    // font-size 10px
    fontSize: /font-size.*\d+px/g,
    // number
    num: /[^0-9.]+/g
};
var cssFormate = function (path, px, callback) {
    var file = fs.createReadStream(path);
    var fileContent = [];
    file.setEncoding('utf8');
    file.on('data', function (chunk) {
        fileContent = chunk.split('}');
        cssBlock(px, fileContent, function (emFile) {
            emToFile(path, emFile, callback);
        });
    });
    file.on('end', function () {
    });
};

var pxToem = function (chunk, px) {
    var emChunk = chunk.replace(/[\d\.]+px/g, function () {
        var args = Array.prototype.slice.call(arguments)[0];
        var num = args.split('px')[0];
        // 特殊处理1px的情况
        return (num / px * 12 < 1) ? ('1px') : (num / px).toFixed(config.fixNumber) + config.type;
    });
    return emChunk;
};

var cssBlock = function (px, cssfile, callback) {
    var emFile = '';
    for (var i = 0; i < cssfile.length; i++) {
        var fontSize = 0;

        if (cssfile[i].indexOf('{') !== -1) {
            cssfile[i] += '}';
        }
        if (cssfile[i].indexOf('font-size') !== -1) {
            // 先把font-size/14处理
            cssfile[i] = cssfile[i].replace(reg.fontSize, function () {
                var args = Array.prototype.slice.call(arguments)[0];
                fontSize = args.replace(reg.num, '');
                return 'font-size: ' + (fontSize / (px || config.px)) + config.type;
            });
        }
        fontSize = (fontSize && config.type !== 'rem') ? fontSize : (px || config.px);
        emFile += pxToem(cssfile[i], fontSize);
    }
    callback(emFile);
};

var emToFile = function (path, emChunk, callback) {
    fs.writeFile(path, emChunk, 'utf-8', function () {
        console.log(path + '-->px2em success!');
        if (callback) {
            callback();
        }
    });
};

module.exports = cssFormate;