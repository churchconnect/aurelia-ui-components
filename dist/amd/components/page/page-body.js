define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PageBody = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var PageBody = exports.PageBody = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="page-body">\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = _dec2(_class = function PageBody() {
        _classCallCheck(this, PageBody);
    }) || _class) || _class);
});