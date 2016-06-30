import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-image" class.bind="fullWidth ? 'full-width' : ''">
        <img src.bind="source">
    </div>
</template>
`)
export class CardImage {

    @bindable source = ''
    @bindable fullWidth = false

}
