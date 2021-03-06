define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CardLinks = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var CardLinks = exports.CardLinks = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="card-links">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function CardLinks() {
        _classCallCheck(this, CardLinks);
    }) || _class) || _class);
});