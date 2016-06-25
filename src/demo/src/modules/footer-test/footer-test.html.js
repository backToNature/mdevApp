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
    templateArray.push('<div class=\"module-footer-test\" node-type=\"module\">');
    templateArray.push('    #if ($status == 1)');
    templateArray.push('        <div class=\"status-1\">');
    templateArray.push('        </div>');
    templateArray.push('    #elseif ($status == 2)');
    templateArray.push('        <div class=\"status-2\">');
    templateArray.push('        </div>');
    templateArray.push('    #else');
    templateArray.push('        <div class=\"status-0\">');
    templateArray.push('        </div>    ');
    templateArray.push('    #end');
    templateArray.push('</div>');

    return templateArray.join('\n');
});
