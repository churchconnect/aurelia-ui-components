'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _dec, _dec2, _class, PageBody;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inlineView = _aureliaFramework.inlineView;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
        }],
        execute: function () {
            _export('PageBody', PageBody = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="page-body">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function PageBody() {
                _classCallCheck(this, PageBody);
            }) || _class) || _class));

            _export('PageBody', PageBody);
        }
    };
});