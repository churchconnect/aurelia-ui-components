import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="image" class.bind="fullWidth ? 'full-width' : ''">
        <img src.bind="source">
    </div>
</template>
`)
export class ImageEmbed {

    @bindable source = ''
    @bindable fullWidth = false

}
