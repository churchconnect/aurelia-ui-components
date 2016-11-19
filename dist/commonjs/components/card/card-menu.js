'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMenu = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardMenu = exports.CardMenu = (_dec = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="card-menu">\n        <share-link></share-link>\n        <slot></slot>\n    </div>\n</template>\n'), _dec(_class = function CardMenu() {
    _classCallCheck(this, CardMenu);
}) || _class);