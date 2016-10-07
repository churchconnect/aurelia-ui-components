'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PullToRefresh = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

var CONTENT_CLASS = 'pull-to-refresh-content';

var REFRESH_EVENT = 'refresh';

var PullToRefresh = exports.PullToRefresh = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="pull-to-refresh-layer">\n        <div class="preloader"></div>\n        <div class="pull-to-refresh-arrow"></div>\n    </div>\n</template>\n'), _dec3 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function PullToRefresh(element) {
        _classCallCheck(this, PullToRefresh);

        _initDefineProp(this, 'app', _descriptor, this);

        _initDefineProp(this, 'doneRefreshing', _descriptor2, this);

        this.refreshing = false;

        this.element = element;
    }

    PullToRefresh.prototype.attached = function attached() {
        var _this = this;

        this.contentElement = document.getElementsByClassName(CONTENT_CLASS)[0];

        this.contentElement.addEventListener(REFRESH_EVENT, function () {
            if (_this.refreshing) return;

            _this.refreshing = true;
            _this.element.dispatchEvent(new CustomEvent(REFRESH_EVENT, { bubbles: true }));
        });

        this.contentElement.addEventListener('refreshdone', function () {
            _this.refreshing = false;
        });
    };

    return PullToRefresh;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'app', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'doneRefreshing', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class) || _class);