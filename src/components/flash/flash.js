import {inlineView, inject, containerless} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@containerless()
@inlineView(`
<template>
	<div class="flash" class.bind="active ? 'active' : ''">
		<div class.bind="message.type" innerHtml.bind="message.text" click.delegate="hideMessage()"></div>
	</div>
</template>
`)
@inject(EventAggregator)
export class Flash {

    constructor(events) {
        this.events = events

        this.events.subscribe('flash.message', (message) => this.showMessage(message))
    }

    get hideEvent() {
        return this._hideEvent
    }

    set hideEvent(event) {
        if (this._hideEvent) this._hideEvent.dispose()

        this._hideEvent = event
    }

    cancelAllHideMessageTriggers() {
        this.hideEvent = null
        clearTimeout(this.hideTimer)
    }

    showMessage(message) {
        if (this.active) return // only show one message at a time

        this.cancelAllHideMessageTriggers()

        this.message = message
        this.active = true

        if (this.message.next) {
            this.hideMessageOnNextRouteChange()
        } else {
            this.hideMessageOnRouteChange()
        }
    }

    hideMessage() {
        this.cancelAllHideMessageTriggers()
        this.active = false
    }

    hideMessageOnRouteChange() {
        this.hideEvent = this.events.subscribe('router:navigation:complete', () => this.hideMessage())
    }

    hideMessageOnNextRouteChange() {
        this.hideEvent = this.events.subscribe('router:navigation:complete', () => this.hideMessageOnRouteChange())
    }

}
