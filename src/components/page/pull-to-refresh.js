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
