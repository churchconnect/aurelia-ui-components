'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, containerless, _dec, _class, CardMenu;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inlineView = _aureliaFramework.inlineView;
            containerless = _aureliaFramework.containerless;
        }],
        execute: function () {
            _export('CardMenu', CardMenu = (_dec = inlineView('\n<template>\n    <div class="card-menu">\n        <share-link></share-link>\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = function CardMenu() {
                _classCallCheck(this, CardMenu);
            }) || _class));

            _export('CardMenu', CardMenu);
        }
    };
});