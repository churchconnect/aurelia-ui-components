var _dec, _dec2, _class;

import { inlineView, bindable, containerless } from 'aurelia-framework';

export let PageBody = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="page-body">
        <slot></slot>
    </div>
</template>
`), _dec(_class = _dec2(_class = class PageBody {}) || _class) || _class);