let components = {
    card: ['./components/card/index', './components/button/index']
};

export function configure(config, includes = []) {
    if (!includes.length) includes = Object.keys(components);

    config.globalResources(includes.reduce((resources, key) => {
        return resources.concat(components[key]);
    }, []));
}