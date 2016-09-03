var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

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

import { inject, bindable, inlineView, containerless } from 'aurelia-framework';
import { Config } from '../../config';

const GMAPS_EMBED_URL_PREFIX = 'https://www.google.com/maps/embed/v1/search';

export let Map = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <iframe width="500" height="275" frameborder="0" style="border:0" src.bind="source" allowfullscreen responsive-iframe></iframe>
</template>
`), _dec3 = inject(Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Map {

    constructor(config) {
        _initDefineProp(this, 'location', _descriptor, this);

        this.apiKey = config.googleMapsApiKey;
    }

    get source() {
        return `${ GMAPS_EMBED_URL_PREFIX }?key=${ this.apiKey }&q=${ this.location }`;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'location', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
})), _class2)) || _class) || _class) || _class);