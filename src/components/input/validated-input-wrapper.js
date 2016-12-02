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
    <div class="validated-input-wrapper" validation-errors.bind="errors" class.bind="errors.length ? 'has-error' : ''">
        <label for.bind="for" innerHtml.bind="title"></label>
        <slot></slot>
        <validation-error-list errors.bind="errors"></validation-error-list>
    </div>
</template>
`)

export class ValidatedInputWrapper {

    @bindable title = ""
    @bindable for = ""

}


