import {Config} from './config'

let components = {
    //TODO: this key seems meaningless at this point.
    card: [
        './components/card/index',
        './components/navigation/index',
        './components/tabs/index',
        './components/page/index',
        './components/profile/index',
        './components/list/index',
        './components/media/index',
        './components/map/index',
        './components/input/index',
        './components/flash/index'
    ]
}

export function configure(aurelia, configCallback, includes=[]) {
    configCallback(aurelia.container.get(Config))

    if (!includes.length) includes = Object.keys(components)

    aurelia.globalResources(includes.reduce((resources, key) => {
        return resources.concat(components[key])
    }, []))
}
