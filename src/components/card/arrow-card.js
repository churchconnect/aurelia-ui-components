import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="arrow-card">
        <div class="card-body">
            <slot></slot>
        </div>
        <i class="card-arrow fa fa-arrow-right"></i>
    </div>
</template>
`)
export class ArrowCard {

}
