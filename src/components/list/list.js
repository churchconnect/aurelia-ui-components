import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="list-block" class.bind="fullWidth ? 'full-width' : ''">
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

}
