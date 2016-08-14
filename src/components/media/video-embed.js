import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="video" class.bind="fullWidth ? 'full-width ' : ''">
        <iframe src.bind="source" frameborder="0" allowfullscreen responsive-iframe></iframe>
    </div>
</template>
`)
export class VideoEmbed {

    @bindable source = ''
    @bindable fullWidth = false

}
