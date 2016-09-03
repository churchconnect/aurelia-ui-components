define(['exports', 'aurelia-framework', '../../utils/random', '../../config'], function (exports, _aureliaFramework, _random, _config) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Slider = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

    var Slider = exports.Slider = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="swiper-container" class.bind="containerClasses" id.bind="id">\n        <div class="swiper-pagination" show.bind="showPagination"></div>\n\n        <div class="swiper-wrapper" ref="slidesWrapper">\n            <slot></slot>\n        </div>\n\n        <div class="swiper-button-prev" show.bind="showControls">\n            <i class="fa fa-chevron-left"></i>\n        </div>\n        <div class="swiper-button-next" show.bind="showControls">\n            <i class="fa fa-chevron-right"></i>\n        </div>\n    </div>\n</template>\n'), _dec3 = (0, _aureliaFramework.inject)(_config.Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function Slider(config) {
            _classCallCheck(this, Slider);

            _initDefineProp(this, 'showPagination', _descriptor, this);

            _initDefineProp(this, 'showControls', _descriptor2, this);

            _initDefineProp(this, 'loop', _descriptor3, this);

            _initDefineProp(this, 'fullWidth', _descriptor4, this);

            this.id = 'swiper-' + (0, _random.generateRandomId)();
            this.config = config;
        }

        Slider.prototype.attached = function attached() {
            this.swiper = this.config.f7.swiper('#' + this.id, {
                pagination: '#' + this.id + ' .swiper-pagination',
                spaceBetween: 0,
                paginationClickable: true,
                nextButton: '#' + this.id + ' .swiper-button-next',
                prevButton: '#' + this.id + ' .swiper-button-prev',
                loop: this.loop
            });

            if (this.slides.length <= 1) this.showControls = false;
        };

        Slider.prototype.detached = function detached() {
            this.swiper.destroy();
        };

        _createClass(Slider, [{
            key: 'containerClasses',
            get: function get() {
                if (!this._containerClasses) {
                    var classes = [];

                    if (this.fullWidth) classes.push('full-width');
                    if (this.showPagination) classes.push('has-pagination');
                    if (this.showControls) classes.push('has-controls');

                    this._containerClasses = classes.join(' ');
                }

                return this._containerClasses;
            }
        }, {
            key: 'slides',
            get: function get() {
                return this.slidesWrapper.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
            }
        }]);

        return Slider;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showPagination', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showControls', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loop', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    })), _class2)) || _class) || _class) || _class);
});