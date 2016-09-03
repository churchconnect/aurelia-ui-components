'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _createClass, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, List;

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

            _export('List', List = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="list-block" class.bind="classes">\n        <ul>\n            <slot></slot>\n        </ul>\n    </div>\n\n    <div class="list-block-label" innerHtml.bind="listLabel" if.bind="listLabel"></div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function () {
                function List() {
                    _classCallCheck(this, List);

                    _initDefineProp(this, 'listLabel', _descriptor, this);

                    _initDefineProp(this, 'fullWidth', _descriptor2, this);

                    _initDefineProp(this, 'inset', _descriptor3, this);
                }

                _createClass(List, [{
                    key: 'classes',
                    get: function get() {
                        if (!this._classes) {
                            var classes = [];

                            if (this.fullWidth) classes.push('full-width');
                            if (this.inset) classes.push('inset');

                            this._classes = classes.join(' ');
                        }

                        return this._classes;
                    }
                }]);

                return List;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'listLabel', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class));

            _export('List', List);
        }
    };
});