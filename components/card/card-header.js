import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-header">
        <h2 innerHtml.bind="title"></h2>
        <small innerHtml.bind="subtitle"></small>
    </div>
</template>
`)
export class CardHeader {

    @bindable title = ''
    @bindable subtitle = ''

}
