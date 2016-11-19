var _dec, _class;

import { inlineView, containerless } from 'aurelia-framework';

export let CardMenu = (_dec = inlineView(`
<template>
    <div class="card-menu">
        <share-link></share-link>
        <slot></slot>
    </div>
</template>
`), _dec(_class = class CardMenu {}) || _class);