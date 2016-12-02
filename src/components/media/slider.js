/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject, inlineView, bindable, containerless} from 'aurelia-framework'
import {generateRandomId} from '../../utils/random'
import {Config} from '../../config'

@containerless()
@inlineView(`
<template>
    <div class="swiper-container" class.bind="containerClasses" id.bind="id">
        <div class="swiper-pagination" show.bind="showPagination"></div>

        <div class="swiper-wrapper" ref="slidesWrapper">
            <slot></slot>
        </div>

        <div class="swiper-button-prev" show.bind="showControls">
            <i class="fa fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" show.bind="showControls">
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>
</template>
`)
@inject(Config)
export class Slider {

    @bindable showPagination = false
    @bindable showControls = false
    @bindable loop = false
    @bindable fullWidth = false

    constructor(config) {
        this.id = `swiper-${generateRandomId()}`
        this.config = config
    }

    // TODO: move this into the view?
    get containerClasses() {
        if (!this._containerClasses) {
            let classes = []

            if (this.fullWidth) classes.push('full-width')
            if (this.showPagination) classes.push('has-pagination')
            if (this.showControls) classes.push('has-controls')

            this._containerClasses = classes.join(' ')
        }

        return this._containerClasses
    }

    get slides() {
        return this.slidesWrapper.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)')
    }

    attached() {
        this.swiper = this.config.f7.swiper(`#${this.id}`, {
            pagination: `#${this.id} .swiper-pagination`,
            spaceBetween: 0,
            paginationClickable: true,
            nextButton: `#${this.id} .swiper-button-next`,
            prevButton: `#${this.id} .swiper-button-prev`,
            loop: this.loop,
        })

        if (this.slides.length <= 1) this.showControls = false
    }

    detached() {
        this.swiper.destroy()
    }

}
