'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('./button');

Object.keys(_button).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});