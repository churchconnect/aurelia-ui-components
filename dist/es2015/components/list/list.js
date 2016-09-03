var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

export let List = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="list-block" class.bind="classes">
        <ul>
            <slot></slot>
        </ul>
    </div>

    <div class="list-block-label" innerHtml.bind="listLabel" if.bind="listLabel"></div>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class List {
    constructor() {
        _initDefineProp(this, 'listLabel', _descriptor, this);

        _initDefineProp(this, 'fullWidth', _descriptor2, this);

        _initDefineProp(this, 'inset', _descriptor3, this);
    }

    get classes() {
        if (!this._classes) {
            let classes = [];

            if (this.fullWidth) classes.push('full-width');
            if (this.inset) classes.push('inset');

            this._classes = classes.join(' ');
        }

        return this._classes;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'listLabel', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);