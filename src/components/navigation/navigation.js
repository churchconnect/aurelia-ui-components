import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="panel panel-reveal" class.bind="alignRight ? 'panel-right' : 'panel-left'">
        <slot name="before-navigation"></slot>

        <div class="list-block">
            <ul>
                <navigation-link repeat.for="link of router.navigation"
                    title.bind="link.title"
                    href.bind="link.href"
                    is-active.bind="link.isActive"
                    icon.bind="link.settings.icon">
                </navigation-link>
            </ul>
        </div>

        <slot name="after-navigation"></slot>
    </div>
</template>
`)
export class Navigation {

    @bindable router
    @bindable alignRight = false

}
