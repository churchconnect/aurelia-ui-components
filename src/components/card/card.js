import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card" class.bind="fullHeight ? 'full-height' : ''">
        <slot></slot>
    </div>
</template>
`)
export class Card {

    @bindable fullHeight

}
