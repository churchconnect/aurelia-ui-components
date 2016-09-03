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

export let CardInputAmount = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="card-input card-input__amount">
        <span class="input-mask" contenteditable="true" onkeypress="return this.innerText.length <= 3" textcontent.bind="inputAmount" blur.trigger="setAmount()"></span>
        <input type="number" min="1" max="999" size="1" value.bind="amount">
    </div>
</template>
`), _dec(_class = _dec2(_class = (_class2 = class CardInputAmount {
    constructor() {
        _initDefineProp(this, 'amount', _descriptor, this);

        _initDefineProp(this, 'inputAmount', _descriptor2, this);
    }

    amountChanged() {
        this.inputAmount = this.amount;
    }

    setAmount() {
        if (!this.isValidAmount(this.inputAmount)) this.inputAmount = 0;

        this.amount = this.inputAmount;
    }

    resetInputAmount() {
        this.inputAmount = '';
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    isValidAmount(amount) {
        return this.inputAmount && this.isNumeric(this.inputAmount);
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'amount', [bindable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'inputAmount', [bindable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
})), _class2)) || _class) || _class);