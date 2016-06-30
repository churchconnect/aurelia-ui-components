import {inlineView, bindable, containerless} from 'aurelia-framework'

// TODO: this "works" for now. but this could use some work...
// suggestion, trigger the input focus when the span is focused.
// This will give you the nice UI on mobile for selecting numbers

@containerless()
@inlineView(`
<template>
    <div class="card-input card-input__amount">
        <span class="input-mask" contenteditable="true" onkeypress="return this.innerText.length <= 3" textcontent.bind="inputAmount" blur.trigger="setAmount()"></span>
        <input type="number" min="1" max="999" size="1" value.bind="amount">
    </div>
</template>
`)
export class CardInputAmount {

    @bindable amount = 0
    @bindable inputAmount = ''

    constructor() {
        this.inputAmount = this.amount
    }

    setAmount() {
        if (!this.isValidAmount(this.inputAmount)) this.inputAmount = 0

        this.amount = this.inputAmount
    }

    resetInputAmount() {
        this.inputAmount = ''
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    isValidAmount(amount) {
        return this.inputAmount && this.isNumeric(this.inputAmount)
    }

}
