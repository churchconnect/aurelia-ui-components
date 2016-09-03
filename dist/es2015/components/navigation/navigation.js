var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { inlineView, bindable, containerless } from 'aurelia-framework';

export let Navigation = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="panel panel-reveal" class.bind="alignRight ? 'panel-right' : 'panel-left'">
        <slot name="before-navigation"></slot>

        <div class="list-block">
            <ul>
                <navigation-link repeat.for="link of router.navigation"
                    title.bind="link.title"
                    href.bind="link.href"
                    is-active.bind="link.isActive"
                    icon.bind="link.settings.icon">
                </navigation-link>
            </ul>
        </div>

        <slot name="after-navigation"></slot>
    </div>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class Navigation {
    constructor() {
        _initDefineProp(this, 'router', _descriptor, this);

        _initDefineProp(this, 'alignRight', _descriptor2, this);
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'alignRight', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
})), _class2)) || _class) || _class);