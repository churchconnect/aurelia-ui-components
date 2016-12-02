/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {Config} from "./config";

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
        './components/flash/index',
        './components/loading-indicator/loading-indicator'
    ]
}

export function configure(aurelia, configCallback, includes = []) {
    configCallback(aurelia.container.get(Config))

    if (!includes.length) includes = Object.keys(components)

    aurelia.globalResources(includes.reduce((resources, key) => {
        return resources.concat(components[key])
    }, []))
}
