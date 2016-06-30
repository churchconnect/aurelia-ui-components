'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _dec, _dec2, _class, CardLinks;

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
            _export('CardLinks', CardLinks = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="card-links">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function CardLinks() {
                _classCallCheck(this, CardLinks);
            }) || _class) || _class));

            _export('CardLinks', CardLinks);
        }
    };
});