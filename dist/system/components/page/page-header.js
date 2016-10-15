'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _createClass, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, PageHeader;

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

            _export('PageHeader', PageHeader = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="page-header" class.bind="image ? \'banner\' : \'\'" css.bind="css">\n        <h2 innerHtml.bind="title"></h2>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function () {
                function PageHeader() {
                    _classCallCheck(this, PageHeader);

                    _initDefineProp(this, 'title', _descriptor, this);

                    _initDefineProp(this, 'image', _descriptor2, this);
                }

                _createClass(PageHeader, [{
                    key: 'css',
                    get: function get() {
                        return this.image ? 'background-image: url(' + this.image + ');' : '';
                    }
                }]);

                return PageHeader;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'image', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            })), _class2)) || _class) || _class));

            _export('PageHeader', PageHeader);
        }
    };
});