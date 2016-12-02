/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="page-header" class.bind="image ? 'banner' : ''" css.bind="css">
        <h2 innerHtml.bind="title"></h2>
    </div>
</template>
`)
export class PageHeader {

    @bindable title = ''
    @bindable image = ''

    get css() {
        return this.image ? `background-image: url(${this.image});` : ''
    }
}
