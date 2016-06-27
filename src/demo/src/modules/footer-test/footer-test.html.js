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
    templateArray.push('            <ul class=\"flex footer-tabs\">');
    templateArray.push('                <li class=\"cell\" data-page=\"index\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-comment\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell active\" data-page=\"find\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-reply\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-help\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-my\"></div>');
    templateArray.push('                </li>');
    templateArray.push('            </ul>');
    templateArray.push('        </div>');
    templateArray.push('    #elseif ($status == 2)');
    templateArray.push('        <div class=\"status-2\">');
    templateArray.push('            <ul class=\"flex footer-tabs\">');
    templateArray.push('                <li class=\"cell\" data-page=\"index\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-comment\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\" data-page=\"find\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-reply\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell active\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-help\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-my\"></div>');
    templateArray.push('                </li>');
    templateArray.push('            </ul>');
    templateArray.push('        </div>');
    templateArray.push('    #elseif ($status == 3)');
    templateArray.push('        <div class=\"status-2\">');
    templateArray.push('            <ul class=\"flex footer-tabs\">');
    templateArray.push('                <li class=\"cell\" data-page=\"index\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-comment\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\" data-page=\"find\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-reply\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell active\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-help\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-my\"></div>');
    templateArray.push('                </li>');
    templateArray.push('            </ul>');
    templateArray.push('        </div>');
    templateArray.push('    #else');
    templateArray.push('        <div class=\"status-0\">');
    templateArray.push('            <ul class=\"flex footer-tabs\">');
    templateArray.push('                <li class=\"cell active\" data-page=\"index\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-comment\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\" data-page=\"find\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-reply\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-help\"></div>');
    templateArray.push('                </li>');
    templateArray.push('                <li class=\"cell\">');
    templateArray.push('                    <div class=\"footer-icon footer-icon-my\"></div>');
    templateArray.push('                </li>');
    templateArray.push('            </ul>');
    templateArray.push('        </div>    ');
    templateArray.push('    #end');
    templateArray.push('</div>');

    return templateArray.join('\n');
});
