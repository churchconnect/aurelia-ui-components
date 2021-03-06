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

import { inlineView, bindable, containerless } from 'aurelia-framework';

export let Slide = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="swiper-slide" ref="element">
        <slot></slot>
    </div>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class Slide {
    constructor() {
        _initDefineProp(this, 'aspectRatio', _descriptor, this);

        this.resizeTimer = null;

        this.resizeEventHandler = () => this.resized();
    }

    attached() {
        if (this.aspectRatio) {
            this.setDimensions();
            window.addEventListener('resize', this.resizeEventHandler);
        }
    }

    detached() {
        window.removeEventListener('resize', this.resizeEventHandler);
    }

    resized() {
        clearTimeout(this.resizeTimer);

        this.resizeTimer = setTimeout(() => {
            this.setDimensions();
        }, 50);
    }

    setDimensions() {
        if (!this.aspectRatio) return;

        this.element.style.width = '100%';
        this.element.style.height = `${window.innerWidth * this.aspectRatio}px`;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'aspectRatio', [bindable], {
    enumerable: true,
    initializer: function () {
        return null;
    }
})), _class2)) || _class) || _class);