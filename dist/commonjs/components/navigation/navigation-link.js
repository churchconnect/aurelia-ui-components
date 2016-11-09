"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavigationLink = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _aureliaFramework = require("aurelia-framework");

var _aureliaRouter = require("aurelia-router");

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

var NavigationLink = exports.NavigationLink = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)("\n<template>\n    <li class=\"item-content\" class.bind=\"isActive ? 'active' : ''\" click.trigger=\"followLink()\">\n        <div class=\"item-media\">\n            <i class=\"fa\" class.bind=\"icon ? 'fa-' + icon : ''\"></i>\n        </div>\n\n        <div class=\"item-inner\">\n            <div class=\"item-title\" innerHtml.bind=\"title\"></div>\n        </div>\n    </li>\n</template>\n"), _dec3 = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function NavigationLink(router) {
        _classCallCheck(this, NavigationLink);

        _initDefineProp(this, "title", _descriptor, this);

        _initDefineProp(this, "href", _descriptor2, this);

        _initDefineProp(this, "isActive", _descriptor3, this);

        _initDefineProp(this, "icon", _descriptor4, this);

        this.router = router;
    }

    NavigationLink.prototype.followLink = function followLink() {
        if (this.href.substring(0, 4).toLowerCase() === 'http') {
            window.open(this.href, '_system');
        } else {
            this.router.navigate(this.href);
        }
    };

    return NavigationLink;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "href", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isActive", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
})), _class2)) || _class) || _class) || _class);