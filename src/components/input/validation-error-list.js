import {inlineView, bindable, containerless} from 'aurelia-framework'

@containerless()
@inlineView(`
<template>
    <ul class="validation-error-list" if.bind="errors">
            <li repeat.for="errorInfo of errors" innerHtml.bind="errorInfo.error.message"></li>
        </ul>
    </div>
</template>
`)

export class ValidationErrorList {

    @bindable errors = []

}
