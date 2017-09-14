/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, bindable} from 'aurelia-framework'

@inlineView(`
<template class="image" class.bind="fullWidth ? 'full-width' : ''">
        <img src.bind="source">
</template>
`)
export class ImageEmbed {

    @bindable source = ''
    @bindable fullWidth = false

}
