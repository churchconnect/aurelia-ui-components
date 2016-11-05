var _dec, _dec2, _dec3, _class;

import { inlineView, containerless, inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

export let LoadingIndicator = (_dec = containerless(), _dec2 = inject(EventAggregator), _dec3 = inlineView(`
<template>
	<div class="request-loading" class.bind="active ? 'active' : ''">
		<div>
			<svg version="1.1" class="request-loading--indicator" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
				<path fill="#fff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"></path>
			</svg>
		</div>
	</div>
</template>
`), _dec(_class = _dec2(_class = _dec3(_class = class LoadingIndicator {

    constructor(events) {
        this.loadingDelay = 300;
        this.delayTimer = null;
        this.requests = [];

        this.events = events;

        events.subscribe('request.start', req => this.addRequest(req));
        events.subscribe('request.complete', () => this.removeRequest());
    }

    addRequest(req) {
        console.log('calling add request.');
        if (!this.requests.length) this.showLoading();

        this.requests.push(req);
    }

    removeRequest() {
        console.log('calling remove request.');
        if (!this.requests.length) return;

        this.requests.pop();

        if (!this.requests.length) this.hideLoading();
    }

    showLoading() {
        this.delay(() => {
            this.active = true;
        });
    }

    hideLoading() {
        this.delay(() => {
            this.active = false;
        });
    }

    delay(cb) {
        clearTimeout(this.delayTimer);

        this.delayTimer = setTimeout(cb, this.loadingDelay);
    }

}) || _class) || _class) || _class);