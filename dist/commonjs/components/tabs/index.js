'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('./tabs');

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});

var _tab = require('./tab');

Object.keys(_tab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tab[key];
    }
  });
});