/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inlineView, containerless, bindable} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <i class="fa fa-share-alt share-link" aria-hidden="true" click.delegate="share()"></i>
</template>
`)
export class ShareLink {
    @bindable sharingInfo

    share() {
        if (typeof cordova === 'undefined') {
            console.log('running outside of cordova: sharing disabled')
            console.log(this.sharingInfo)
        } else {
            var options = {
                message: this.sharingInfo.message,
                subject: this.sharingInfo.title,
                url: this.sharingInfo.link
            }

            var onSuccess = function (result) {
                console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }

            var onError = function (msg) {
                console.log("Sharing failed with message: " + msg);
            }

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        }
    }

}

