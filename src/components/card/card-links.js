import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-links">
        <slot></slot>
    </div>
</template>
`)
export class CardLinks {}
