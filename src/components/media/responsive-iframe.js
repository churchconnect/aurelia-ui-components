/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

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
