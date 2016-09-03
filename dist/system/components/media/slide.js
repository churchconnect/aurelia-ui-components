'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, Slide;

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
            inlineView = _aureliaFramework.inlineView;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
        }],
        execute: function () {
            _export('Slide', Slide = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="swiper-slide" ref="element">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function () {
                function Slide() {
                    var _this = this;

                    _classCallCheck(this, Slide);

                    _initDefineProp(this, 'aspectRatio', _descriptor, this);

                    this.resizeTimer = null;

                    this.resizeEventHandler = function () {
                        return _this.resized();
                    };
                }

                Slide.prototype.attached = function attached() {
                    if (this.aspectRatio) {
                        this.setDimensions();
                        window.addEventListener('resize', this.resizeEventHandler);
                    }
                };

                Slide.prototype.detached = function detached() {
                    window.removeEventListener('resize', this.resizeEventHandler);
                };

                Slide.prototype.resized = function resized() {
                    var _this2 = this;

                    clearTimeout(this.resizeTimer);

                    this.resizeTimer = setTimeout(function () {
                        _this2.setDimensions();
                    }, 50);
                };

                Slide.prototype.setDimensions = function setDimensions() {
                    if (!this.aspectRatio) return;

                    this.element.style.width = '100%';
                    this.element.style.height = window.innerWidth * this.aspectRatio + 'px';
                };

                return Slide;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'aspectRatio', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            })), _class2)) || _class) || _class));

            _export('Slide', Slide);
        }
    };
});