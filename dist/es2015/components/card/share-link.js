var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { inlineView, containerless, bindable } from 'aurelia-framework';

export let ShareLink = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <i class="fa fa-share-alt share-link" aria-hidden="true" click.delegate="share()"></i>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class ShareLink {
    constructor() {
        _initDefineProp(this, 'sharingInfo', _descriptor, this);
    }

    share() {
        if (typeof cordova === 'undefined') {
            console.log('running outside of cordova: sharing disabled');
            console.log(this.sharingInfo);
        } else {

            var onSuccess = function (result) {
                console.log("Share completed? " + result.completed);
                console.log("Shared to app: " + result.app);
            };

            var onError = function (msg) {
                console.log("Sharing failed with message: " + msg);
            };

            window.plugins.socialsharing.shareWithOptions(this.sharingInfo, onSuccess, onError);
        }
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'sharingInfo', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);