'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navigation = require('./navigation');

Object.keys(_navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navigation[key];
    }
  });
});

var _navigationLink = require('./navigation-link');

Object.keys(_navigationLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navigationLink[key];
    }
  });
});