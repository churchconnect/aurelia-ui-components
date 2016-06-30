'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inlineView, containerless, _dec, _dec2, _class, CardActions;

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
            _export('CardActions', CardActions = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="card-actions">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function CardActions() {
                _classCallCheck(this, CardActions);
            }) || _class) || _class));

            _export('CardActions', CardActions);
        }
    };
});