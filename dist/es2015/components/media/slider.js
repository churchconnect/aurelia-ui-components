var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

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

import { inject, inlineView, bindable, containerless } from 'aurelia-framework';
import { generateRandomId } from '../../utils/random';
import { Config } from '../../config';

export let Slider = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="swiper-container" class.bind="containerClasses" id.bind="id">
        <div class="swiper-pagination" show.bind="showPagination"></div>

        <div class="swiper-wrapper" ref="slidesWrapper">
            <slot></slot>
        </div>

        <div class="swiper-button-prev" show.bind="showControls">
            <i class="fa fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" show.bind="showControls">
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>
</template>
`), _dec3 = inject(Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Slider {

    constructor(config) {
        _initDefineProp(this, 'showPagination', _descriptor, this);

        _initDefineProp(this, 'showControls', _descriptor2, this);

        _initDefineProp(this, 'loop', _descriptor3, this);

        _initDefineProp(this, 'fullWidth', _descriptor4, this);

        _initDefineProp(this, 'autoplay', _descriptor5, this);

        _initDefineProp(this, 'speed', _descriptor6, this);

        this.id = `swiper-${ generateRandomId() }`;
        this.config = config;
    }

    get containerClasses() {
        if (!this._containerClasses) {
            let classes = [];

            if (this.fullWidth) classes.push('full-width');
            if (this.showPagination) classes.push('has-pagination');
            if (this.showControls) classes.push('has-controls');

            this._containerClasses = classes.join(' ');
        }

        return this._containerClasses;
    }

    get slides() {
        return this.slidesWrapper.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    }

    attached() {
        var swiperOptions = {
            pagination: `#${ this.id } .swiper-pagination`,
            spaceBetween: 0,
            paginationClickable: true,
            nextButton: `#${ this.id } .swiper-button-next`,
            prevButton: `#${ this.id } .swiper-button-prev`,
            loop: this.loop,
            speed: Number(this.speed),
            autoplayDisableOnInteraction: false
        };

        if (this.autoplay) swiperOptions.autoplay = this.autoplay;

        this.swiper = this.config.f7.swiper(`#${ this.id }`, swiperOptions);

        if (this.slides.length <= 1) this.showControls = false;
    }

    detached() {
        this.swiper.destroy();
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showPagination', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showControls', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loop', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'fullWidth', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'autoplay', [bindable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'speed', [bindable], {
    enumerable: true,
    initializer: function () {
        return 500;
    }
})), _class2)) || _class) || _class) || _class);