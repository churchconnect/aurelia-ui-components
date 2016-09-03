define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ResponsiveIframe = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var ResponsiveIframe = exports.ResponsiveIframe = (_dec = (0, _aureliaFramework.customAttribute)('responsive-iframe'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
        function ResponsiveIframe(element) {
            var _this = this;

            _classCallCheck(this, ResponsiveIframe);

            this.resizeTimer = null;

            this.resizeEventHandler = function () {
                return _this.resized();
            };

            this.element = element;
        }

        ResponsiveIframe.prototype.attached = function attached() {
            this.aspectRatio = this.element.offsetHeight / this.element.offsetWidth;
            this.adjustDimensions();

            window.addEventListener('resize', this.resizeEventHandler);
        };

        ResponsiveIframe.prototype.detached = function detached() {
            window.removeEventListener('resize', this.resizeEventHandler);
        };

        ResponsiveIframe.prototype.resized = function resized() {
            var _this2 = this;

            clearTimeout(this.resizeTimer);

            this.resizeTimer = setTimeout(function () {
                _this2.adjustDimensions();
            }, 50);
        };

        ResponsiveIframe.prototype.adjustDimensions = function adjustDimensions() {
            this.element.width = '100%';
            this.element.height = this.element.offsetWidth * this.aspectRatio + 'px';
        };

        return ResponsiveIframe;
    }()) || _class) || _class);
});