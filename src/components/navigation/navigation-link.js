import {inlineView, bindable, containerless, inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@containerless()
@inlineView(`
<template>
    <li class="item-content" class.bind="isActive ? 'active' : ''" click.trigger="followLink()">
        <div class="item-media">
            <i class="fa" class.bind="icon ? 'fa-' + icon : ''"></i>
        </div>

        <div class="item-inner">
            <div class="item-title" innerHtml.bind="title"></div>
        </div>
    </li>
</template>
`)
@inject(Router)
export class NavigationLink {

    @bindable title = ''
    @bindable href = ''
    @bindable isActive = false
    @bindable icon = ''

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
