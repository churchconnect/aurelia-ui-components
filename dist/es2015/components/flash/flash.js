var _dec, _dec2, _dec3, _class;

import { inlineView, inject, containerless } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export let Flash = (_dec = containerless(), _dec2 = inlineView(`
<template>
	<div class="flash" class.bind="active ? 'active' : ''" if.bind="message.text">
		<div class.bind="message.type" innerHtml.bind="message.text"></div>

		<a href="javascript:;" class="flash-close" click.delegate="hideMessage()">
			<i class="fa fa-times"></i>
		</a>
	</div>
</template>
`), _dec3 = inject(EventAggregator), _dec(_class = _dec2(_class = _dec3(_class = class Flash {

    constructor(events) {
        this.events = events;

        this.events.subscribe('flash.message', message => this.showMessage(message));
    }

    get hideEvent() {
        return this._hideEvent;
    }

    set hideEvent(event) {
        if (this._hideEvent) this._hideEvent.dispose();

        this._hideEvent = event;
    }

    cancelAllHideMessageTriggers() {
        this.hideEvent = null;
        clearTimeout(this.hideTimer);
    }

    showMessage(message) {
        if (this.active) return;

        this.cancelAllHideMessageTriggers();

        this.message = message;
        this.active = true;

        if (this.message.next) {
            this.hideMessageOnNextRouteChange();
        } else {
            this.hideMessageOnRouteChange();
        }
    }

    hideMessage() {
        this.cancelAllHideMessageTriggers();
        this.active = false;
    }

    hideMessageOnRouteChange() {
        this.hideEvent = this.events.subscribe('router:navigation:complete', () => this.hideMessage());
    }

    hideMessageOnNextRouteChange() {
        this.hideEvent = this.events.subscribe('router:navigation:complete', () => this.hideMessageOnRouteChange());
    }

}) || _class) || _class) || _class);