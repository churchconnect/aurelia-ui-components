import {inlineView, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
`)
export class Card {}
