define(function(require, exports, module) {
    var isEaseIn = false, isEaseOut = false;
    var easing = {
        easeIn: function ($wrapper, $pre) {
            isEaseIn = true;
            $pre.transition({
                transform: 'translate3d(-'+$(window).width() * 0.32+'px,0,0)',
                duration: 300,
                easing: 'in-out',
                complete: function() {
                    if (isEaseOut) {
                        return;
                    }
                    $wrapper.css('position', 'static');
                }
            });
            $wrapper.transition({
                transform: 'translate3d(0,0,0)',
                duration: 300,
                easing: 'in-out',
                complete: function() {
                    if (isEaseOut) {
                        return;
                    }
                    $pre.hide();
                }
            });
        },
        easeOut: function ($wrapper, $pre) {
            isEaseOut = true;
            $pre.css('position', 'fixed');
            $wrapper.show();
            $pre.transition({
                transform: 'translate3d(100%,0,0)',
                duration: 300,
                easing: 'in-out',
                complete: function() {
                }
            });
            $wrapper.transition({
                transform: 'translate3d(0,0,0)',
                duration: 300,
                easing: 'in-out',
                complete: function() {
                    isEaseOut = false;
                }
            });
        }
    };
    module.exports = easing;
});