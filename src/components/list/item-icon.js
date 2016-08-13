import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="item-media">
        <i class="icon" class.bind="iconClass"></i>
    </div>
</template>
`)
export class ItemIcon {

    @bindable icon

    get iconClass() {
        return `fa fa-${this.icon}`
    }

}
