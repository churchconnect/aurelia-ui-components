/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, containerless, inject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";

@containerless()
@inject(EventAggregator)
@inlineView(`
<template>
	<div class="request-loading" class.bind="active ? 'active' : ''">
		<div>
			<svg version="1.1" class="request-loading--indicator" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
				<path fill="#fff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"></path>
			</svg>
		</div>
	</div>
</template>
`)
export class LoadingIndicator {

    loadingDelay = 300
    delayTimer = null
    requests = []

    constructor(events) {
        this.events = events

        events.subscribe('request.start', (req) => this.addRequest(req))
        events.subscribe('request.complete', () => this.removeRequest())
    }

    addRequest(req) {
        if (!this.requests.length) this.showLoading()

        this.requests.push(req)
    }

    removeRequest() {
        if (!this.requests.length) return

        this.requests.pop()

        if (!this.requests.length) this.hideLoading()
    }

    showLoading() {
        this.delay(() => {
            this.active = true
        })
    }

    hideLoading() {
        this.delay(() => {
            this.active = false
        })
    }

    delay(cb) {
        clearTimeout(this.delayTimer)

        this.delayTimer = setTimeout(cb, this.loadingDelay)
    }

}
