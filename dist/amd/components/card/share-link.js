define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ShareLink = undefined;

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

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

    var ShareLink = exports.ShareLink = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="share-link" click.delegate="share()">\n        <i class="fa fa-share-alt" aria-hidden="true" ></i>\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = (_class2 = function () {
        function ShareLink() {
            _classCallCheck(this, ShareLink);

            _initDefineProp(this, 'sharingInfo', _descriptor, this);
        }

        ShareLink.prototype.share = function share() {
            if (typeof cordova === 'undefined') {
                console.log('running outside of cordova: sharing disabled');
                console.log(this.sharingInfo);
            } else {
                var options = {
                    message: this.sharingInfo.message,
                    subject: this.sharingInfo.title,
                    url: this.sharingInfo.link
                };

                var onSuccess = function onSuccess(result) {
                    console.log("Share completed? " + result.completed);
                    console.log("Shared to app: " + result.app);
                };

                var onError = function onError(msg) {
                    console.log("Sharing failed with message: " + msg);
                };

                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
            }
        };

        return ShareLink;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sharingInfo', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class);
});