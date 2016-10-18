define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ArrowCard = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var ArrowCard = exports.ArrowCard = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="arrow-card">\n        <div class="card-body">\n            <slot></slot>\n        </div>\n        <i class="card-arrow fa fa-arrow-right"></i>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function ArrowCard() {
        _classCallCheck(this, ArrowCard);
    }) || _class) || _class);
});