import {inlineView, bindable, containerless, inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@containerless()
@inlineView(`
<template>
    <a class="tab-link" href.bind="href" class.bind="isActive ? 'active' : ''" click.trigger="followLink()">
        <i class="fa" class.bind="icon ? 'fa-' + icon : ''"></i>
        <span class="tabbar-label" innerHtml.bind="label"></span>
    </a>
</template>
`)

@inject(Router)
export class Tab {

    @bindable label = ''
    @bindable href = ''
    @bindable icon = ''
    @bindable isActive = false

    constructor(router) {
        this.router = router
    }

    followLink() {
        if (this.href.substring(0, 4).toLowerCase() === 'http') {
            window.open(this.href, '_system')
        } else {
            this.router.navigate(this.href)
        }
    }
}
