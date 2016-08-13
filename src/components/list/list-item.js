import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <li>
        <div class="item-content">
            <item-icon icon.bind="icon" if.bind="icon"></item-icon>

            <div class="item-inner">
                <div class="item-title">
                    <p innerHtml.bind="title"></p>
                    <small innerHtml.bind="subtitle" if.bind="subtitle"></small>
                </div>

                <div class="item-after">
                    <slot name="after-content"></slot>
                </div>
            </div>
        </div>
    </li>
</template>
`)
export class ListItem {

    @bindable icon
    @bindable title
    @bindable subtitle

}
