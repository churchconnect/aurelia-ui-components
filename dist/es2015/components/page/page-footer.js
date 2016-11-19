var _dec, _dec2, _dec3, _class;

import { inject, inlineView, bindable, containerless } from 'aurelia-framework';
import { Router } from 'aurelia-router';

export let PageFooter = (_dec = containerless(), _dec2 = inlineView(`
<template>
    <div class="page-footer">
        <slot></slot>
        <button class="close" click.trigger="close()">Close</button>
    </div>
</template>
`), _dec3 = inject(Router), _dec(_class = _dec2(_class = _dec3(_class = class PageFooter {

    constructor(router) {
        this.router = router;
    }

    close() {
        this.router.history.history.back();
    }
}) || _class) || _class) || _class);