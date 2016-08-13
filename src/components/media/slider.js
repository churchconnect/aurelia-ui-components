import {inlineView, bindable, containerless} from 'aurelia-framework'
import {generateRandomId} from '../../utils/random'

@containerless()
@inlineView(`
<template>
    <div class="swiper-container" class.bind="id">
        <div class="swiper-pagination" show.bind="showPagination"></div>

        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div class="swiper-button-prev" show.bind="showControls"></div>
        <div class="swiper-button-next" show.bind="showControls"></div>
    </div>
</template>
`)
export class Slider {

    @bindable f7
    @bindable showPagination = false
    @bindable showControls = false

    constructor() {
        this.id = `swiper-${generateRandomId()}`
    }

    attached() {
        this.swiper = this.f7.swiper(`.${this.id}`, {
            pagination: `.${this.id} .swiper-pagination`,
            spaceBetween: 0,
            paginationClickable: true,
            nextButton: `.${this.id} .swiper-button-next`,
            prevButton: `.${this.id} .swiper-button-prev`
        })
    }

    detached() {
        this.swiper.destroy()
    }

}
