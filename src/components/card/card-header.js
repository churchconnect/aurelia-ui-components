/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable} from 'aurelia-framework'

@inlineView(`
<template class="card-header">
    <h2 innerHtml.bind="title"></h2>
    <small innerHtml.bind="subtitle" if.bind="subtitle"></small>
    <small if.bind="date">
        <i class="fa fa-clock-o"></i>
        <span innerHtml.bind="date"></span>
    </small>
</template>
`)
export class CardHeader {

    @bindable title = ''
    @bindable subtitle = ''
    @bindable date = ''

}
