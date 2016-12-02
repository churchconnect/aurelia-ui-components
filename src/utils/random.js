/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

module.exports.generateRandomId = function () {
    return getRandomString(5) + Date.now()
}

function getRandomString(length) {
    return Array.from(Array(length), (x, i) => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('')
}
