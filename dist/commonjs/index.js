'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _config = require('./config');

var components = {
    card: ['./components/card/index', './components/navigation/index', './components/tabs/index', './components/page/index', './components/profile/index', './components/list/index', './components/media/index', './components/map/index', './components/input/index', './components/flash/index']
};

function configure(aurelia, configCallback) {
    var includes = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    configCallback(aurelia.container.get(_config.Config));

    if (!includes.length) includes = Object.keys(components);

    aurelia.globalResources(includes.reduce(function (resources, key) {
        return resources.concat(components[key]);
    }, []));
}