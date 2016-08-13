import {inlineView, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="swiper-slide">
        <slot></slot>
    </div>
</template>
`)
export class Slide {}
