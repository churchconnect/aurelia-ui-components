"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = exports.Config = function () {
    function Config() {
        _classCallCheck(this, Config);
    }

    Config.prototype.registerF7Instance = function registerF7Instance(f7) {
        this.f7 = f7;
    };

    Config.prototype.registerGoogleMapsApiKey = function registerGoogleMapsApiKey(key) {
        this.googleMapsApiKey = key;
    };

    return Config;
}();