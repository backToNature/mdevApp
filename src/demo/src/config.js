define(function(require, exports, module) {
    module.exports = {
        index: {
            title: '主页',
            modules: ['main-test', 'footer-test.0'],
            level: 1
        },
        tap2: {
            title: 'B',
            modules: ['main-test', 'footer-test.1'],
            level: 1
        },
        tap3: {
            title: 'C',
            modules: ['main-test', 'footer-test.2'],
            level: 1
        },
        tap4: {
            title: 'D',
            modules: ['main-test', 'footer-test.3'],
            level: 1
        },
        'demo-level-2': {
            title: '2级页',
            modules: ['main-test-level-2'],
            level: 2
        },
        'demo-level-3': {
            title: '3级页',
            modules: ['main-test-level-3'],
            level: 3
        },
        newPage: {
            title: '3级页',
            modules: ['main-test-level-3'],
            level: 3
        }
    };
});