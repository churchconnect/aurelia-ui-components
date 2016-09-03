import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="list-block" class.bind="classes">
        <ul>
            <slot></slot>
        </ul>
    </div>

    <div class="list-block-label" innerHtml.bind="listLabel" if.bind="listLabel"></div>
</template>
`)
export class List {

    @bindable listLabel
    @bindable fullWidth
    @bindable inset

    get classes() {
        if (!this._classes) {
            let classes = []

            if (this.fullWidth) classes.push('full-width')
            if (this.inset) classes.push('inset')

            this._classes = classes.join(' ')
        }

        return this._classes
    }

}
