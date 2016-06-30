define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CardActions = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var CardActions = exports.CardActions = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="card-actions">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function CardActions() {
        _classCallCheck(this, CardActions);
    }) || _class) || _class);
});