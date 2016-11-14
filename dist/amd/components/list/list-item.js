define(["exports", "aurelia-framework", "aurelia-router"], function (exports, _aureliaFramework, _aureliaRouter) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ListItem = undefined;

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

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

    var ListItem = exports.ListItem = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)("\n<template>\n    <li>\n        <div class=\"item-content\">\n        <!--<div class=\"item-content external\" click.trigger=\"titleLink ? followLink() : ''\">-->\n            <item-icon icon.bind=\"icon\" if.bind=\"icon\"></item-icon>\n\n            <div class=\"item-inner\">\n                <div class=\"item-title\">\n                    <p>\n                        <a href.bind=\"titleLink\" innerHtml.bind=\"title\" if.bind=\"titleLink\" class.bind=\"noAjax ? 'external' : ''\" target.bind=\"target\"></a>\n                        <span innerHtml.bind=\"title\" if.bind=\"!titleLink\"></span>\n                    </p>\n\n                    <small innerHtml.bind=\"subtitle\" if.bind=\"subtitle\"></small>\n                </div>\n\n                <div class=\"item-after\">\n                    <slot name=\"after-content\"></slot>\n                </div>\n            </div>\n        </div>\n    </li>\n</template>\n"), _dec3 = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function ListItem(router) {
            _classCallCheck(this, ListItem);

            _initDefineProp(this, "icon", _descriptor, this);

            _initDefineProp(this, "title", _descriptor2, this);

            _initDefineProp(this, "titleLink", _descriptor3, this);

            _initDefineProp(this, "subtitle", _descriptor4, this);

            _initDefineProp(this, "target", _descriptor5, this);

            _initDefineProp(this, "noAjax", _descriptor6, this);

            this.router = router;
        }

        ListItem.prototype.followLink = function followLink() {
            if (this.titleLink.substring(0, 2).toLowerCase() === '#/') {
                this.router.navigate(this.titleLink);
            } else {
                window.location.href = this.titleLink;
            }
        };

        return ListItem;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLink", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "subtitle", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "target", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return '_self';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "noAjax", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    })), _class2)) || _class) || _class) || _class);
});