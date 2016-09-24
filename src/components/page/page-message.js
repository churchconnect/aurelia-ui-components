import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="page-message" class.bind="type">
        <slot></slot>
    </div>
</template>
`)
export class PageMessage {

    @bindable type

}
