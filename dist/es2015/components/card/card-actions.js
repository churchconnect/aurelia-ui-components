var _dec, _dec2, _class;

import { inlineView, containerless } from 'aurelia-framework';

export let CardActions = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="card-actions">
        <slot></slot>
    </div>
</template>
`), _dec(_class = _dec2(_class = class CardActions {}) || _class) || _class);