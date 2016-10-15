import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="page-header" class.bind="image ? 'banner' : ''" css.bind="css">
        <h2 innerHtml.bind="title"></h2>
    </div>
</template>
`)
export class PageHeader {

    @bindable title = ''
    @bindable image = ''

    get css() {
        return this.image ? `background-image: url(${this.image});` : ''
    }
}
