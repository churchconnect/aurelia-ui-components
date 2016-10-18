'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, bindable, containerless, _dec, _dec2, _class, ArrowCard;

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
            _export('ArrowCard', ArrowCard = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="arrow-card">\n        <div class="card-body">\n            <slot></slot>\n        </div>\n        <i class="card-arrow fa fa-arrow-right"></i>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function ArrowCard() {
                _classCallCheck(this, ArrowCard);
            }) || _class) || _class));

            _export('ArrowCard', ArrowCard);
        }
    };
});