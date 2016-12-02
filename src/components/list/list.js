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
    <div class="list-block" class.bind="classes">
        <ul>
            <slot></slot>
        </ul>
    </div>

    <div class="list-block-label" innerHtml.bind="listLabel" if.bind="listLabel"></div>
</template>
`)
export class List {

    @bindable listLabel
    @bindable fullWidth
    @bindable inset

    get classes() {
        if (!this._classes) {
            let classes = []

            if (this.fullWidth) classes.push('full-width')
            if (this.inset) classes.push('inset')

            this._classes = classes.join(' ')
        }

        return this._classes
    }

}
