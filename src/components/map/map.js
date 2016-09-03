import {inject, bindable, inlineView, containerless} from 'aurelia-framework'
import {Config} from '../../config'

const GMAPS_EMBED_URL_PREFIX = 'https://www.google.com/maps/embed/v1/search'

@containerless()
@inlineView(`
<template>
    <iframe width="500" height="275" frameborder="0" style="border:0" src.bind="source" allowfullscreen responsive-iframe></iframe>
</template>
`)
@inject(Config)
export class Map {

    @bindable location = ''

    constructor(config) {
        this.apiKey = config.googleMapsApiKey
    }

    get source() {
        return `${GMAPS_EMBED_URL_PREFIX}?key=${this.apiKey}&q=${this.location}`
    }

}
