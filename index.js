module.exports = (function () {
    var command = process.argv[2],
        json = require('./package.json');

    // 展示查看版本
    var showVersion = function () {
        var content = [
            '',
            '    Version: ' + json.version,
            '',
            '    By ' + json.author + ' ' + json.license + '.',
            '    The more commands see \'' + json.name + ' --help\'.'
        ];
        console.log(content.join('\n'));
    };

    // 展示命令帮助
    var showHelp = function () {
        var content = [
            '',
            '    Commands: ',
            '',
            '      -v          show Version',
            '      -h          show HelpThe',
            '      init        init a new app',
            '      build       generate a deploy floder',
            '      start       previwe your app,you can set port parameter like \'mdevApp start 8000\'',
            '      debug       debug your app,you can set port parameter like \'mdevApp debug 8000\''
        ];
        console.log(content.join('\n'));
    };

    // 展示错误命令
    var showError = function (name) {
        var content = [
            '',
            '  Error:',
            '',
            '    The \'' + name + '\' is not a command.',
            '    See \'' + json.name + ' -h\'.'
        ];

        console.log(content.join('\n'));
    };

    var map = {
        '-v': showVersion,
        '-h': showHelp,
        'init': require('./src/init.js'),
        'build': require('./src/build.js'),
        'start': require('./src/start.js'),
        'debug': require('./src/debug.js')
    };

    if (map[process.argv[2]]) {
        map[process.argv[2]]();
    } else {
        showError(process.argv[2]);
    }

})();