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

export let Card = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="card" class.bind="cssClasses">
        <div class="card-body">
            <slot></slot>
        </div>
        <i if.bind="arrow" class="card-arrow fa" class.bind="arrowClass"></i>
    </div>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class Card {
    constructor() {
        _initDefineProp(this, 'fullHeight', _descriptor, this);

        _initDefineProp(this, 'arrow', _descriptor2, this);
    }

    get cssClasses() {
        return `${ this.fullHeight ? 'full-height' : '' } ${ this.arrow ? `arrow arrow-${ this.arrow }` : '' }`;
    }

    get arrowClass() {
        return `fa-arrow-${ this.arrow }`;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'fullHeight', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'arrow', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
})), _class2)) || _class) || _class);