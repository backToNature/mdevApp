/**
 * @author liangxiao
 * @version [v1.0]
 * @description template
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 200, plusplus: true, sloppy: true*/
/*global define: true*/
define(function (require, exports, module) {
    'use strict';

    var templateArray;

    templateArray = [];
    templateArray.push('#*');
    templateArray.push('作者: 郭豪');
    templateArray.push('修改: 郭豪 2016/6/14');
    templateArray.push('*#');
    templateArray.push('<div class=\"module-main-test-level-3\" node-type=\"module\">');
    templateArray.push('    <h1>三级页</h1>');
    templateArray.push('    <button class=\"backToSecond\"><<点击回到二级页</button>');
    templateArray.push('    <button class=\"backToTop\"><<点击回到一级页</button>');
    templateArray.push('</div>');

    return templateArray.join('\n');
});
