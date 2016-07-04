import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <a class="tab-link" href.bind="href" class.bind="isActive ? 'active' : ''">
        <i class="fa" class.bind="icon ? 'fa-' + icon : ''"></i>
        <span class="tabbar-label" innerHtml.bind="label"></span>
    </a>
</template>
`)
export class Tab {

    @bindable label = ''
    @bindable href = ''
    @bindable icon = ''
    @bindable isActive = false

}
