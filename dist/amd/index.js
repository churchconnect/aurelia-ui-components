define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    var components = {
        card: ['./components/card/index', './components/button/index']
    };

    function configure(config) {
        var includes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        if (!includes.length) includes = Object.keys(components);

        config.globalResources(includes.reduce(function (resources, key) {
            return resources.concat(components[key]);
        }, []));
    }
});