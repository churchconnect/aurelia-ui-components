import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card" class.bind="cssClasses">
        <div class="card-body">
            <slot></slot>
        </div>
        <i if.bind="arrow" class="card-arrow fa" class.bind="arrowClass"></i>
    </div>
</template>
`)
export class Card {

    @bindable fullHeight
    @bindable arrow = ''

    get cssClasses() {
        return `${this.fullHeight ? 'full-height' : ''} ${this.arrow ? `arrow arrow-${this.arrow}` : ''}`
    }

    get arrowClass() {
        return `fa-arrow-${this.arrow}`
    }

}
