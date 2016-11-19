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

