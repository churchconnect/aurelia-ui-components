'use strict';

System.register(['aurelia-framework', 'aurelia-router'], function (_export, _context) {
    "use strict";

    var inject, inlineView, bindable, containerless, Router, _dec, _dec2, _dec3, _class, PageFooter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            inlineView = _aureliaFramework.inlineView;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            _export('PageFooter', PageFooter = (_dec = containerless(), _dec2 = inlineView('\n<template>\n    <div class="page-footer">\n        <slot></slot>\n        <button class="close" click.trigger="close()">Close</button>\n    </div>\n</template>\n'), _dec3 = inject(Router), _dec(_class = _dec2(_class = _dec3(_class = function () {
                function PageFooter(router) {
                    _classCallCheck(this, PageFooter);

                    this.router = router;
                }

                PageFooter.prototype.close = function close() {
                    this.router.history.history.back();
                };

                return PageFooter;
            }()) || _class) || _class) || _class));

            _export('PageFooter', PageFooter);
        }
    };
});