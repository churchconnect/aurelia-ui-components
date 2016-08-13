import {inlineView, bindable, containerless} from 'aurelia-framework'
import {generateRandomId} from '../../utils/random'

@containerless()
@inlineView(`
<template>
    <div class="video" class.bind="fullWidth ? 'full-width ' : ''" id.bind="id">
        <iframe src.bind="source" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
`)
export class VideoEmbed {

    @bindable source = ''
    @bindable fullWidth = false
    resizeTimer = null
    resizeEventHandler = () => this.resized()

    constructor() {
        this.id = `video-${generateRandomId()}`
    }

    get element() {
        return document.getElementById(this.id)
    }

    get iframe() {
        if (!this.element) return

        return this.element.getElementsByTagName('iframe')[0]
    }

    get aspectRatio() {
        if (!this.iframe) return

        if (!this._aspectRatio) this._aspectRatio = this.iframe.offsetHeight / this.iframe.offsetWidth

        return this._aspectRatio
    }

    attached() {
        this.adjustDimensions()

        window.addEventListener('resize', this.resizeEventHandler)
    }

    detached() {
        window.removeEventListener('resize', this.resizeEventHandler)
    }

    // throttles the resize event
    resized() {
        clearTimeout(this.resizeTimer)

        this.resizeTimer = setTimeout(() => {
            this.adjustDimensions()
        }, 50)
    }

    adjustDimensions() {
        let aspectRatio = this.aspectRatio

        this.iframe.width = '100%'
        this.iframe.height = `${this.iframe.offsetWidth * aspectRatio}px`
    }

}
