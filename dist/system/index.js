'use strict';

System.register(['./config'], function (_export, _context) {
    "use strict";

    var Config, components;
    function configure(aurelia, configCallback) {
        var includes = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

        configCallback(aurelia.container.get(Config));

        if (!includes.length) includes = Object.keys(components);

        aurelia.globalResources(includes.reduce(function (resources, key) {
            return resources.concat(components[key]);
        }, []));
    }

    _export('configure', configure);

    return {
        setters: [function (_config) {
            Config = _config.Config;
        }],
        execute: function () {
            components = {
                card: ['./components/card/index', './components/navigation/index', './components/tabs/index', './components/page/index', './components/profile/index', './components/list/index', './components/media/index', './components/map/index', './components/input/index', './components/flash/index']
            };
        }
    };
});