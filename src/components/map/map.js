/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

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
