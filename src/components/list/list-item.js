import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <li>
        <div class="item-content">
            <item-icon icon.bind="icon" if.bind="icon"></item-icon>

            <div class="item-inner">
                <div class="item-title">
                    <p>
                        <a href.bind="titleLink" innerHtml.bind="title" if.bind="titleLink" target="_blank"></a>
                        <span innerHtml.bind="title" if.bind="!titleLink"></span>
                    </p>

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
    @bindable titleLink
    @bindable subtitle

}
