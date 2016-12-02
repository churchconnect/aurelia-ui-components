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
    <div class="toolbar tabbar tabbar-labels">
        <div class="toolbar-inner">
            <tab repeat.for="tab of tabs"
                label.bind="tab.label"
                href.bind="tab.href"
                icon.bind="tab.icon">
            </tab>
        </div>
    </div>
</template>
`)
export class Tabs {

    @bindable tabs = []
    @bindable showIcons = true
    @bindable showLabels = true

}
