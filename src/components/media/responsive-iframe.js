import {inject, customAttribute} from 'aurelia-framework'

@customAttribute('responsive-iframe')
@inject(Element)
export class ResponsiveIframe {

    resizeTimer = null
    resizeEventHandler = () => this.resized()

    constructor(element){
        this.element = element
    }

    attached() {
        this.aspectRatio = this.element.offsetHeight / this.element.offsetWidth
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
        this.element.width = '100%'
        this.element.height = `${this.element.offsetWidth * this.aspectRatio}px`
    }

}
