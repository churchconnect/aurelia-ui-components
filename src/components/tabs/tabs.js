import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="toolbar tabbar tabbar-labels">
        <div class="toolbar-inner">
            <tab repeat.for="tab of tabs"
                label.bind="tab.label"
                href.bind="tab.href"
                icon.bind="tab.icon">
            </tab>
        </div>
    </div>
</template>
`)
export class Tabs {

    @bindable tabs = []
    @bindable showIcons = true
    @bindable showLabels = true

}
