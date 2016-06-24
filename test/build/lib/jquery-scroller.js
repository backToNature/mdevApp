!(function ($, _) {

    var util = {
        momentum: function (current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start,
                speed = Math.abs(distance) / time,
                destination,
                duration;
            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
            duration = speed / deceleration;
            if ( destination < lowerMargin ) {
                destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed;
            } else if ( destination > 0 ) {
                destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed;
            }
            return {
                destination: Math.round(destination),
                duration: duration
            };
        },
        scrollTo: function ($dom, type, duration, destination) {
            $dom
            .css('transition-timing-function', type === 'bonuce'? 'cubic-bezier(.25,.46,.45,.94)' : 'cubic-bezier(0.1, 0.57, 0.1, 1)')
            .css('transition-duration', duration + 'ms')
            .css('transform', 'translate3d(0px, '+destination+'px, 0px)');
        }
    };

    var Scroller = (function () {
        'use strict';
        var _scroller_id = _.uniqueId('_scroller_id');
        function Scroller($dom) {
            this._scroller_id = _scroller_id;
            this.$dom = $dom;
            this.$wrapper = $dom.parent();
            this.init();
            $dom
            .css('transition-timing-function', 'cubic-bezier(0.1, 0.57, 0.1, 1)')
            .css('transition-duration', '0ms');
        };
        Scroller.prototype.init = function () {
            var $dom = this.$dom, $wrapper = this.$wrapper, event, startY, currentY, temp, duration,
                startTransformY, isBonuce = false, originOffset = $dom.offset().top;
            var bonuceDeal = function () {
                if ($dom.offset().top > originOffset) {
                    $dom.one($.support.transitionEnd, function () {
                        $dom
                        .css('transition-timing-function', 'cubic-bezier(0.1, 0.57, 0.1, 1)')
                        .css('transition-duration', '0ms');
                    });
                    util.scrollTo($dom, 'bonuce', 600, 0);
                    return;
                }
                if ($wrapper.height() - $dom.offset().top > $dom.height()) {
                    $dom.one($.support.transitionEnd, function () {
                        $dom
                        .css('transition-timing-function', 'cubic-bezier(0.1, 0.57, 0.1, 1)')
                        .css('transition-duration', '0ms');
                    });
                    if ($dom.height() <= $wrapper.height()) {
                        util.scrollTo($dom, 'bonuce', 600, 0);
                        return;
                    }
                    util.scrollTo($dom, 'bonuce', 600, $wrapper.height() - $dom.height());
                    return;
                } 
            };
            $wrapper.on('touchstart', function (e) {
                event = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
                startY = event.pageY;
                temp = $dom.css('transform');
                if (!(temp.indexOf('matrix') >= 0)) {
                    temp = 'matrix(1, 0, 0, 1, 0, 0)';
                }
                currentY = parseFloat(temp.split(',')[temp.split(',').length - 1].split(')')[0]);
                startTransformY = currentY;
                if (isBonuce === true) {
                    util.scrollTo($dom, null, 0, currentY);
                }
                duration = new Date();
            });
            $wrapper.on('touchmove', function (e) {
                event = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
                if ($wrapper.height() - $dom.offset().top >= $dom.height()) {
                    $dom.css('transform', 'translate3d(0,'+(currentY + (event.pageY - startY) / 3) +'px,0)');
                    return;
                }
                if ($dom.offset().top >= originOffset) {
                    $dom.css('transform', 'translate3d(0,'+(currentY + (event.pageY - startY) / 3) +'px,0)');
                    return;
                }
                $dom.css('transform', 'translate3d(0,'+(currentY + (event.pageY - startY))+'px,0)');
            });
            $wrapper.on('touchend', function (e) {
                temp = $dom.css('transform');
                currentY = parseFloat(temp.split(',')[temp.split(',').length - 1].split(')')[0]) || 0;
                duration = new Date() - duration;
                var result = util.momentum(currentY, startTransformY, duration, $wrapper.height() - $dom.height(), $wrapper.height());
                if (duration < 300) {
                    isBonuce = true;
                    $dom.one($.support.transitionEnd, function () {
                        bonuceDeal();
                    });
                    util.scrollTo($dom, 'bonuce', result.duration, result.destination);
                } else {
                    bonuceDeal();
                }
            });
        };
        return Scroller;
    }());
    if (typeof define === 'function') {
        define(function() {
            return Scroller;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = Scroller;
    } else {
        this.Scroller = Scroller;
    }
}(jQuery, _));
