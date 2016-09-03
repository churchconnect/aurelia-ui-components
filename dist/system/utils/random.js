'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function getRandomString(length) {
        return Array.from(Array(length), function (x, i) {
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }).join('');
    }
    return {
        setters: [],
        execute: function () {
            module.exports.generateRandomId = function () {
                return getRandomString(5) + Date.now();
            };
        }
    };
});