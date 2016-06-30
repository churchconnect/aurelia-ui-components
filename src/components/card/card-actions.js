import {inlineView, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card-actions">
        <slot></slot>
    </div>
</template>
`)
export class CardActions {}
