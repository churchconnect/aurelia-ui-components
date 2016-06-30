import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-input card-input__amount">
        <input type="number" min="1" max="999999" value.bind="amount">
    </div>
</template>
`)
export class CardInputAmount {

    @bindable amount = ''

}
