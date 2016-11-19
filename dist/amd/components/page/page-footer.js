define(['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PageFooter = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _dec3, _class;

    var PageFooter = exports.PageFooter = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n    <div class="page-footer">\n        <slot></slot>\n        <button class="close" click.trigger="close()">Close</button>\n    </div>\n</template>\n'), _dec3 = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function PageFooter(router) {
            _classCallCheck(this, PageFooter);

            this.router = router;
        }

        PageFooter.prototype.close = function close() {
            this.router.history.history.back();
        };

        return PageFooter;
    }()) || _class) || _class) || _class);
});