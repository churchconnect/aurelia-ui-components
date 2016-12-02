/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject, inlineView, bindable, containerless} from 'aurelia-framework'
import {Router} from 'aurelia-router'


@containerless()
@inlineView(`
<template>
    <div class="page-footer">
        <slot></slot>
        <button class="close" click.trigger="close()">Close</button>
    </div>
</template>
`)
@inject(Router)
export class PageFooter {

    constructor(router) {
        this.router = router
    }

    close() {
        this.router.history.history.back()
    }
}
