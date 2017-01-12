'use strict';

System.register(['aurelia-framework', '../../utils/random', '../../config'], function (_export, _context) {
    "use strict";

    var inject, inlineView, bindable, containerless, generateRandomId, Config, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Slider;

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

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            inlineView = _aureliaFramework.inlineView;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
        }, function (_utilsRandom) {
            generateRandomId = _utilsRandom.generateRandomId;
        }, function (_config) {
            Config = _config.Config;
        }],
        execute: function () {
            _createClass = function () {
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

            _export('Slider', Slider = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="swiper-container" class.bind="containerClasses" id.bind="id">\n        <div class="swiper-pagination" show.bind="showPagination"></div>\n\n        <div class="swiper-wrapper" ref="slidesWrapper">\n            <slot></slot>\n        </div>\n\n        <div class="swiper-button-prev" show.bind="showControls">\n            <i class="fa fa-chevron-left"></i>\n        </div>\n        <div class="swiper-button-next" show.bind="showControls">\n            <i class="fa fa-chevron-right"></i>\n        </div>\n    </div>\n</template>\n'), _dec3 = inject(Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
                function Slider(config) {
                    _classCallCheck(this, Slider);

                    _initDefineProp(this, 'showPagination', _descriptor, this);

                    _initDefineProp(this, 'showControls', _descriptor2, this);

                    _initDefineProp(this, 'loop', _descriptor3, this);

                    _initDefineProp(this, 'fullWidth', _descriptor4, this);

                    _initDefineProp(this, 'autoplay', _descriptor5, this);

                    _initDefineProp(this, 'speed', _descriptor6, this);

                    this.id = 'swiper-' + generateRandomId();
                    this.config = config;
                }

                Slider.prototype.attached = function attached() {
                    var swiperOptions = {
                        pagination: '#' + this.id + ' .swiper-pagination',
                        spaceBetween: 0,
                        paginationClickable: true,
                        nextButton: '#' + this.id + ' .swiper-button-next',
                        prevButton: '#' + this.id + ' .swiper-button-prev',
                        loop: this.loop,
                        speed: Number(this.speed)
                    };

                    if (this.autoplay) swiperOptions.autoplay = this.autoplay;

                    this.swiper = this.config.f7.swiper('#' + this.id, swiperOptions);

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
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showPagination', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showControls', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loop', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'autoplay', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'speed', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 500;
                }
            })), _class2)) || _class) || _class) || _class));

            _export('Slider', Slider);
        }
    };
});