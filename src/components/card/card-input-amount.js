/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

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

    amountChanged() {
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
