import {inject, inlineView, bindable, containerless} from 'aurelia-framework'
import {Router} from 'aurelia-router'


@containerless()
@inlineView(`
<template>
    <div class="page-footer">
        <slot></slot>
        <button class="close" click.trigger="close()">Close</button>
    </div>
</template>
`)
@inject(Router)
export class PageFooter {

    constructor(router) {
        this.router = router
    }

    close() {
        this.router.history.history.back()
    }
}
