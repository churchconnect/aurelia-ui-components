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
    <div class="content-block profile-summary">
        <div class="profile-pic" style.bind="user.imageUrl ? 'background-image: url(' + user.imageUrl + ')' : ''"></div>
        <div class="profile-name" innerHtml.bind="user.name"></div>
    </div>
</template>
`)
export class ProfileSummary {

    @bindable user

}
