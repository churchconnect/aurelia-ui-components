'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardInputAmount = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var CardInputAmount = exports.CardInputAmount = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="card-input card-input__amount">\n        <input type="number" min="1" max="999999" value.bind="amount">\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function CardInputAmount() {
    _classCallCheck(this, CardInputAmount);

    _initDefineProp(this, 'amount', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'amount', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
})), _class2)) || _class) || _class);