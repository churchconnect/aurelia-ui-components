import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <div class="validated-input" validation-errors.bind="errors" class.bind="errors.length ? 'has-error' : ''">
        <label for.bind="for" innerHtml.bind="title"></label>
        <slot></slot>
        <validation-error-list errors.bind="errors"></validation-error-list>
    </div>
</template>
`)

export class ValidatedInput {

    @bindable title = ""
    @bindable for = ""

}


