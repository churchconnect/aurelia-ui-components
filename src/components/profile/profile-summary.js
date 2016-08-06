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
