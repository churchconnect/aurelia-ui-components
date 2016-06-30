'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var components;
    return {
        setters: [],
        execute: function () {
            components = {
                card: ['./components/card/index', './components/button/index']
            };
            function configure(config) {
                var includes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

                if (!includes.length) includes = Object.keys(components);

                config.globalResources(includes.reduce(function (resources, key) {
                    return resources.concat(components[key]);
                }, []));
            }

            _export('configure', configure);
        }
    };
});