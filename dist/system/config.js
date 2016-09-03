"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var Config;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("Config", Config = function () {
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
            }());

            _export("Config", Config);
        }
    };
});