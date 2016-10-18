var _dec, _dec2, _class;

import { inlineView, bindable, containerless } from 'aurelia-framework';

export let ArrowCard = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="arrow-card">
        <div class="card-body">
            <slot></slot>
        </div>
        <i class="card-arrow fa fa-arrow-right"></i>
    </div>
</template>
`), _dec(_class = _dec2(_class = class ArrowCard {}) || _class) || _class);