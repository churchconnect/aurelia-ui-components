define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Tabs = undefined;

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

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

    var Tabs = exports.Tabs = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="toolbar tabbar tabbar-labels">\n        <div class="toolbar-inner">\n            <tab repeat.for="tab of tabs"\n                label.bind="tab.label"\n                href.bind="tab.href"\n                icon.bind="tab.icon">\n            </tab>\n        </div>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function Tabs() {
        _classCallCheck(this, Tabs);

        _initDefineProp(this, 'tabs', _descriptor, this);

        _initDefineProp(this, 'showIcons', _descriptor2, this);

        _initDefineProp(this, 'showLabels', _descriptor3, this);
    }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showIcons', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showLabels', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class2)) || _class) || _class);
});