/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable, inject, containerless} from 'aurelia-framework'

const CONTENT_CLASS = 'pull-to-refresh-content'

const REFRESH_EVENT = 'refresh'

@containerless()
@inlineView(`
<template>
    <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
    </div>
</template>
`)
@inject(Element)
export class PullToRefresh {

    @bindable app
    @bindable doneRefreshing

    refreshing = false

    constructor(element) {
        this.element = element
    }

    attached() {
        this.contentElement = document.getElementsByClassName(CONTENT_CLASS)[0]

        this.contentElement.addEventListener(REFRESH_EVENT, () => {
            if (this.refreshing) return

            this.refreshing = true
            this.element.dispatchEvent(new CustomEvent(REFRESH_EVENT, { bubbles: true }))
        })

        this.contentElement.addEventListener('refreshdone', () => {
            this.refreshing = false
        })
    }

}
