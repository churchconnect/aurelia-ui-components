var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { inlineView, bindable, inject, containerless } from 'aurelia-framework';

const CONTENT_CLASS = 'pull-to-refresh-content';

const REFRESH_EVENT = 'refresh';

export let PullToRefresh = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
    </div>
</template>
`), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class PullToRefresh {

    constructor(element) {
        _initDefineProp(this, 'app', _descriptor, this);

        _initDefineProp(this, 'doneRefreshing', _descriptor2, this);

        this.refreshing = false;

        this.element = element;
    }

    attached() {
        this.contentElement = document.getElementsByClassName(CONTENT_CLASS)[0];

        this.contentElement.addEventListener('refresh', () => {
            if (this.refreshing) return;

            this.refreshing = true;
            this.element.dispatchEvent(new CustomEvent(REFRESH_EVENT, { bubbles: true }));
        });

        this.contentElement.addEventListener('refreshdone', () => {
            this.refreshing = false;
        });
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'app', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'doneRefreshing', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class) || _class);