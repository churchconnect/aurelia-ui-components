import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="page-body" class.bind="hasFooter ? 'has-footer' : ''">
        <slot></slot>
    </div>
</template>
`)
export class PageBody {

    @bindable hasFooter = false

}
