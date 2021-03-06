"use strict";

System.register(["aurelia-framework", "aurelia-router"], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, inject, Router, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Tab;

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
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            _export("Tab", Tab = (_dec = containerless(), _dec2 = inlineView("\n<template>\n    <a class=\"tab-link\" href.bind=\"href\" class.bind=\"isActive ? 'active' : ''\" click.trigger=\"followLink()\">\n        <i class=\"fa\" class.bind=\"icon ? 'fa-' + icon : ''\"></i>\n        <span class=\"tabbar-label\" innerHtml.bind=\"label\"></span>\n    </a>\n</template>\n"), _dec3 = inject(Router), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
                function Tab(router) {
                    _classCallCheck(this, Tab);

                    _initDefineProp(this, "label", _descriptor, this);

                    _initDefineProp(this, "href", _descriptor2, this);

                    _initDefineProp(this, "icon", _descriptor3, this);

                    _initDefineProp(this, "isActive", _descriptor4, this);

                    this.router = router;
                }

                Tab.prototype.followLink = function followLink() {
                    if (this.href.substring(0, 4).toLowerCase() === 'http') {
                        window.open(this.href, '_system');
                    } else {
                        this.router.navigate(this.href);
                    }
                };

                return Tab;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "href", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isActive", [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class2)) || _class) || _class) || _class));

            _export("Tab", Tab);
        }
    };
});