var _dec, _dec2, _class;

import { inlineView, bindable, containerless } from 'aurelia-framework';

export let Card = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
`), _dec(_class = _dec2(_class = class Card {}) || _class) || _class);