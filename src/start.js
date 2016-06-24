var path = require('path')
var nodeServer = require('nodejs-server');

var serverStart = function () {
    
    var root = path.join(process.cwd(), './build');
    var port = process.argv[3] || 80;
    var nserver = new nodeServer(root, port);
    require('./build')();
    nserver.start();
};
module.exports = serverStart;