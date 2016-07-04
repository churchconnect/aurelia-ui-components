import {inlineView, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="swiper-slide">
        <card>
            <slot></slot>
        </card>
    </div>
</template>
`)
export class SwipeableCard {}
