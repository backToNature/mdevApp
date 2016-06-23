module.exports = (function () {
    var command = process.argv[2],
        json = require('./package.json');

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

    var showHelp = function () {
        var content = [
            '',
            '    Version: ' + json.version,
            '',
            '    By ' + json.author + ' ' + json.license + '.',
            '    The more commands see \'' + json.name + ' --help\'.'
        ];
        console.log(content.join('\n'));
    };

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
        'start': require('./src/start.js')
    };

    if (map[process.argv[2]]) {
        map[process.argv[2]]();
    } else {
        showError(process.argv[2]);
    }

})();