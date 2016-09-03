var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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

export let ListItem = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <li>
        <div class="item-content">
            <item-icon icon.bind="icon" if.bind="icon"></item-icon>

            <div class="item-inner">
                <div class="item-title">
                    <p>
                        <a href.bind="titleLink" innerHtml.bind="title" if.bind="titleLink" target="_blank"></a>
                        <span innerHtml.bind="title" if.bind="!titleLink"></span>
                    </p>

                    <small innerHtml.bind="subtitle" if.bind="subtitle"></small>
                </div>

                <div class="item-after">
                    <slot name="after-content"></slot>
                </div>
            </div>
        </div>
    </li>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class ListItem {
    constructor() {
        _initDefineProp(this, 'icon', _descriptor, this);

        _initDefineProp(this, 'title', _descriptor2, this);

        _initDefineProp(this, 'titleLink', _descriptor3, this);

        _initDefineProp(this, 'subtitle', _descriptor4, this);
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'titleLink', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'subtitle', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);