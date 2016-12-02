/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable, containerless, inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@containerless()
@inlineView(`
<template>
    <li>
        <div class="item-content">
        <!--<div class="item-content external" click.trigger="titleLink ? followLink() : ''">-->
            <item-icon icon.bind="icon" if.bind="icon"></item-icon>

            <div class="item-inner">
                <div class="item-title">
                    <p>
                        <a href.bind="titleLink" innerHtml.bind="title" if.bind="titleLink" class.bind="noAjax ? 'external' : ''" target.bind="target"></a>
                        <span innerHtml.bind="title" if.bind="!titleLink"></span>
                    </p>

                    <small innerHtml.bind="subtitle" if.bind="subtitle"></small>
                </div>

                <div class="item-after">
                    <slot name="after-content"></slot>
                </div>
            </div>
        </div>
    </li>
</template>
`)
@inject(Router)
export class ListItem {

    @bindable icon
    @bindable title
    @bindable titleLink
    @bindable subtitle
    @bindable target = '_self'
    @bindable noAjax = false //tells framework 7 not to use ajax

    constructor(router) {
        this.router = router
    }

    //TODO: will this cause problems with some routes? Should we change it to look for 'http', 'mail', or 'tel:'?
    followLink() {
        if (this.titleLink.substring(0, 2).toLowerCase() === '#/') {
            this.router.navigate(this.titleLink)
        } else {
            window.location.href = this.titleLink
        }
    }

}
