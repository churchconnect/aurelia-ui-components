/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="swiper-slide" ref="element">
        <slot></slot>
    </div>
</template>
`)
export class Slide {

    @bindable aspectRatio = null
    resizeTimer = null
    resizeEventHandler = () => this.resized()

    attached() {
        if (this.aspectRatio) {
            this.setDimensions()
            window.addEventListener('resize', this.resizeEventHandler)
        }
    }

    detached() {
        window.removeEventListener('resize', this.resizeEventHandler)
    }

    resized() {
        clearTimeout(this.resizeTimer)

        this.resizeTimer = setTimeout(() => {
            this.setDimensions()
        }, 50)
    }

    setDimensions() {
        if (!this.aspectRatio) return

        this.element.style.width = '100%'
        this.element.style.height = `${window.innerWidth * this.aspectRatio}px`
    }

}
