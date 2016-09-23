import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="page-body">
        <slot></slot>
    </div>
</template>
`)
export class PageBody {

}
