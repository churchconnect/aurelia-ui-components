'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Flash = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Flash = exports.Flash = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inlineView)('\n<template>\n\t<div class="flash" class.bind="active ? \'active\' : \'\'">\n\t\t<div class.bind="message.type" innerHtml.bind="message.text" click.delegate="hideMessage()"></div>\n\t</div>\n</template>\n'), _dec3 = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Flash(events) {
        var _this = this;

        _classCallCheck(this, Flash);

        this.events = events;

        this.events.subscribe('flash.message', function (message) {
            return _this.showMessage(message);
        });
    }

    Flash.prototype.cancelAllHideMessageTriggers = function cancelAllHideMessageTriggers() {
        this.hideEvent = null;
        clearTimeout(this.hideTimer);
    };

    Flash.prototype.showMessage = function showMessage(message) {
        if (this.active) return;

        this.cancelAllHideMessageTriggers();

        this.message = message;
        this.active = true;

        if (this.message.next) {
            this.hideMessageOnNextRouteChange();
        } else {
            this.hideMessageOnRouteChange();
        }
    };

    Flash.prototype.hideMessage = function hideMessage() {
        this.cancelAllHideMessageTriggers();
        this.active = false;
    };

    Flash.prototype.hideMessageOnRouteChange = function hideMessageOnRouteChange() {
        var _this2 = this;

        this.hideEvent = this.events.subscribe('router:navigation:complete', function () {
            return _this2.hideMessage();
        });
    };

    Flash.prototype.hideMessageOnNextRouteChange = function hideMessageOnNextRouteChange() {
        var _this3 = this;

        this.hideEvent = this.events.subscribe('router:navigation:complete', function () {
            return _this3.hideMessageOnRouteChange();
        });
    };

    _createClass(Flash, [{
        key: 'hideEvent',
        get: function get() {
            return this._hideEvent;
        },
        set: function set(event) {
            if (this._hideEvent) this._hideEvent.dispose();

            this._hideEvent = event;
        }
    }]);

    return Flash;
}()) || _class) || _class) || _class);