import {inlineView, bindable, containerless} from 'aurelia-framework'
import {generateRandomId} from '../../utils/random'

@containerless()
@inlineView(`
<template>
    <div class="swiper-container" class.bind="id">
        <div class="swiper-pagination"></div>

        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
`)
export class SwipeableCards {

    @bindable f7

    constructor() {
        this.id = `swiper-${generateRandomId()}`
    }

    attached() {
        this.swiper = this.f7.swiper(`.${this.id}`, {
            pagination: `.${this.id} .swiper-pagination`,
            spaceBetween: 0,
            paginationClickable: true
        })
    }

    detached() {
        this.swiper.destroy()
    }

}
