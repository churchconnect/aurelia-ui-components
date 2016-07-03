import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="panel panel-reveal" class.bind="alignRight ? 'panel-right' : 'panel-left'">
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
    </div>
</template>
`)
export class Navigation {

    @bindable router
    @bindable alignRight = false

}
