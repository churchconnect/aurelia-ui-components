import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-header">
        <h2 innerHtml.bind="title"></h2>
        <small innerHtml.bind="subtitle" if.bind="subtitle"></small>
        <small if.bind="date">
            <i class="fa fa-clock-o"></i>
            <span innerHtml.bind="date"></span>
        </small>
    </div>
</template>
`)
export class CardHeader {

    @bindable title = ''
    @bindable subtitle = ''
    @bindable date = ''

}
