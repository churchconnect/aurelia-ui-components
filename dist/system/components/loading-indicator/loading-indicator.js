"use strict";

System.register(["aurelia-framework", "aurelia-event-aggregator"], function (_export, _context) {
    "use strict";

    var inlineView, containerless, inject, EventAggregator, _dec, _dec2, _dec3, _class, LoadingIndicator;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inlineView = _aureliaFramework.inlineView;
            containerless = _aureliaFramework.containerless;
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            _export("LoadingIndicator", LoadingIndicator = (_dec = containerless(), _dec2 = inject(EventAggregator), _dec3 = inlineView("\n<template>\n\t<div class=\"request-loading\" class.bind=\"active ? 'active' : ''\">\n\t\t<div>\n\t\t\t<svg version=\"1.1\" class=\"request-loading--indicator\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n\t\t\t\t<path fill=\"#fff\" d=\"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\"></path>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n</template>\n"), _dec(_class = _dec2(_class = _dec3(_class = function () {
                function LoadingIndicator(events) {
                    var _this = this;

                    _classCallCheck(this, LoadingIndicator);

                    this.loadingDelay = 300;
                    this.delayTimer = null;
                    this.requests = [];

                    this.events = events;

                    events.subscribe('request.start', function (req) {
                        return _this.addRequest(req);
                    });
                    events.subscribe('request.complete', function () {
                        return _this.removeRequest();
                    });
                }

                LoadingIndicator.prototype.addRequest = function addRequest(req) {
                    if (!this.requests.length) this.showLoading();

                    this.requests.push(req);
                };

                LoadingIndicator.prototype.removeRequest = function removeRequest() {
                    if (!this.requests.length) return;

                    this.requests.pop();

                    if (!this.requests.length) this.hideLoading();
                };

                LoadingIndicator.prototype.showLoading = function showLoading() {
                    var _this2 = this;

                    this.delay(function () {
                        _this2.active = true;
                    });
                };

                LoadingIndicator.prototype.hideLoading = function hideLoading() {
                    var _this3 = this;

                    this.delay(function () {
                        _this3.active = false;
                    });
                };

                LoadingIndicator.prototype.delay = function delay(cb) {
                    clearTimeout(this.delayTimer);

                    this.delayTimer = setTimeout(cb, this.loadingDelay);
                };

                return LoadingIndicator;
            }()) || _class) || _class) || _class));

            _export("LoadingIndicator", LoadingIndicator);
        }
    };
});